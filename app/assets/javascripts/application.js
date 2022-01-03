//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require fastclick
//= require jquery-readyselector
//= require_tree .

$(document).ready(function(){
  /* Balloons for scramble */
  $('td.individual-solve')
    .balloon({
      tipSize: 24,
       css: {
         border: 'solid 4px #1A4F5A',
         padding: '10px',
         fontSize: '110%',
         lineHeight: '3',
         backgroundColor: '#000',
         color: '#fff'
       }
     });
});

$(".timer.index").ready(function(){

  /* Avoid mobile delays */
  FastClick.attach(document.body);

  /* Tab controls */
  $(".notice, .alert")
    .delay(500)
    .fadeIn("normal", function() {
      $(this).delay(1500).fadeOut();
      $(".notice,.alert").hover().fadeOut();
    });

  var start = null, control = null, cube = null,
      total_cubes = 0, cube_count = 0,
      all_times = new Array(),
      session_data = new Array(),
      running = false;

  /* DOM */
  var body = $("body"),
      current_puzzle_selector = $("#current_puzzle"),
      timer_button = $("#timer_button"),
      scramble_container = $("div.scrambleContainer>span.scramble"),
      timer_container = $(".timer_val"),
      timer_list = $("#timerTimes ul"),
      timer_list_items = $("#timerTimes ul li"),
      total_cubes_container = $(".cubes-amt").children("span"),
      avg_session = $('.avg-session'),
      current_puzzle = current_puzzle_selector.val();

  var delete_button = "<a href=\"#\" class=\"delete\">[x]</a>";

  var AVG_AMT = 12,
      SCRAMBLE_COUNT = 25,
      DEFAULT_CUBE = current_puzzle_selector.val() || "cube_3x3";

  var session_complete_message = "Session complete. " +
        "Your times have been recorded. " +
        "Feel free to continue cubing!";

  var cube = new Cube(DEFAULT_CUBE, SCRAMBLE_COUNT);

  var Timer = {

    modal_open: false,
    current_time_raw: 0,
    all_times_raw: [],

    generateScramble: function(){
      result = cube.scramble();
      scramble_container.html(result);
    },

    run: function(){
      running = (running) ? false : true;
      start = new Date().getTime();

      if(running){
        interval = setInterval(this.timer.bind(this),10);
      } else {
        clearInterval(interval);
        $.confirm("Would you like to accept this time?");
      }
    },

    ok: function(){
      this.increment();
      this.addTime();
      this.updateStats();
    },

    reset: function(){
      total_cubes = 0;
      all_times = [];
      cube_count = 0;

      timer_container.html('0:00');

      timer_list_items.each(function(){
        var _this = $(this);
        var pos = _this.data('position');
        _this.children('span').html(pos);
      });

      cube = new Cube(current_puzzle, SCRAMBLE_COUNT);
      scramble_container.html(cube.scramble());

      total_cubes_container.html(total_cubes);
      this.updateStats();
    },

    increment: function(){
      total_cubes += 1;
      cube_count = (cube_count < AVG_AMT) ? cube_count + 1 : 1;
      total_cubes_container.html(total_cubes);
    },

    addTime: function(){
      let current_session_time = {};
      let current_time = timer_container.html();
      let current_time_container = timer_list
        .children("li.time-" + cube_count)
        .children("span");

      /* @TODO Collect data for display purposes.
       * Eventually, this can be refactored to use session data */
      current_time_container.html(current_time);
      all_times.push(parseFloat(current_time).toFixed(2));
      this.all_times_raw.push(this.current_time_raw);

      current_session_time.time = parseFloat(current_time);
      current_session_time.scramble = scramble_container.text();
      session_data.push(current_session_time);

      this.generateScramble();
    },

    updateStats: function(){
      var avgDisplay = $(".avg-12 span");
      this.updateSessionAvg();
      this.updateTotalAvg();

      if(total_cubes == AVG_AMT) Timer.postSessionAvg();

      const fastest = (this.all_times_raw.length) ? this.humanReadableTime(this.all_times_raw.min()) : '--';
      const slowest = (this.all_times_raw.length) ? this.humanReadableTime(this.all_times_raw.max()) : '--';

      $(".fastest").children("span").html(fastest);
      $(".slowest").children("span").html(slowest);
    },

    postSessionAvg: function(){
      let session_times = timer_list_items.map(function(){
        return $(this).text().trim();
      }).get();

      let session_params = {
        puzzle_type: current_puzzle,
        session_data: { session_array: session_data }
      };

      $.ajaxSetup({
        headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
      });

      $.post( "/timer", session_params);
      alert(session_complete_message);
    },

    updateSessionAvg: function(){
      var session_times = new Array();
      var times_total = 0;

      if(total_cubes >= AVG_AMT){
        $.each(timer_list_items ,function(){
          session_times.push(parseFloat($(this).children("span").html()));
        });

        session_times.remove(session_times.min());
        session_times.remove(session_times.max());

        for(var i=0;i<session_times.length;i++){
          times_total += session_times[i]
        }

        avg_session
          .children("span")
          .html((times_total/(AVG_AMT-2)).toFixed(2));
      } else {
        avg_session
          .children("span")
          .html("--");
      }
    },

    updateTotalAvg: function(){
      let avg = 0;

      if(!total_cubes){
        avg = '--';
      } else {
        const total_times = this.all_times_raw.reduce((a,b) => a + b, 0);
        avg = total_times / this.all_times_raw.length;
      }

      $(".avg-all")
        .children("span")
        .html(this.humanReadableTime(avg));
    },

    timer: function(){
      var t = new Date().getTime() - start;
      var elapsed = Math.floor(t / 10) / 100;
      this.current_time_raw = elapsed;;

      timer_container.html(this.humanReadableTime(elapsed));
    },

    humanReadableTime: function(raw_time) {
      /* @TODO add hours+ case? not sure if we need that */
      if(raw_time > 60) {
        return new Date(raw_time * 1000).toISOString().substr(14, 8);
      }

      return raw_time.toFixed(2);
    }
  }

  /* Prototype Methods */
  Array.prototype.max = function() {
    var max = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
    return max;
  }

  Array.prototype.min = function() {
    var min = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++) if (this[i] < min) min = this[i];
    return min;
  }

  Array.prototype.remove = function() {
    var what, a = arguments, len = a.length, ax;
    while (len && this.length) {
      what = a[--len];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
        break;
      }
    }
    return this;
  };

  /* Events */
  body.on("click", "a.delete",function(e){
    e.preventDefault();
    $(this).parent().remove();
    Timer.checkTimes();
  });

  body.on("keydown", function(e){
    if(e.keyCode == 32 && !Timer.modal_open){
      e.preventDefault();
      if(!running)
        timer_button.addClass("keydown");
      else
        timer_button.removeClass("active");
    }
  });

  body.on("keyup", function(e){
    if(e.keyCode == 32 && !Timer.modal_open){
      e.preventDefault();

      if(!running){
        timer_button
          .removeClass("keydown")
          .addClass("active");
      } else {
        timer_button
          .removeClass("active")
      }

      Timer.run();
    }
  });

  $(document).on("click", "#timer_button", function(event){
    event.preventDefault();
    event.stopPropagation()

    if(!running){
      timer_button
        .removeClass("keydown")
        .addClass("active");
    } else {
      timer_button
        .removeClass("active")
    }

    Timer.run();
    $(this).blur();
  })

  current_puzzle_selector.on("change", function(){
    current_puzzle = $(this).val();
    Timer.reset();
  });

  /* jQuery-UI alert */
  $.extend({
    alert: function (message, title) {
      $("<div></div>").dialog({
        buttons: { "Ok": function () { $(this).dialog("close"); } },
        close: function (event, ui) { $(this).remove(); },
        resizable: false,
        title: title,
        modal: true
      }).text(message);
    },
    confirm: function(message, title) {
      $("<div class=\"confirm\"></div>").dialog({
        open: function(event, ui){
          $(".ui-dialog-titlebar-close").hide();
          Timer.modal_open = true;
        },
        buttons: {
          "Ok": function() {
            $(this).dialog("close");
            Timer.ok();
          },
          "Cancel": function() {
            $(this).dialog("close");
          }
        },
        close: function(event, ui) {
          Timer.modal_open = false;
          $(this).remove();
        },
        resizable: false,
        title: "",
        modal: true
      }).text(message);
    }
  });

  function init(){
    var initial_scramble = cube.scramble();
    scramble_container.html(initial_scramble);
  }

  init();
});
