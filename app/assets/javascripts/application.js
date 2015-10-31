//= require jquery
//= require jquery_ujs
//= require_tree .

/* @TODO isMobile, fullscreen touch, remove mobile 300ms touch lag, etc. */

$(document).ready(function(){
  /* Tab controls */
  $(".notice,.alert").delay(500).fadeIn("normal", function() {
    $(this).delay(1500).fadeOut();
    $(".notice,.alert").hover().fadeOut();
  });

  /* Timer */
  var AVG_AMT = 12;
  var SCRAMBLE_MOVES = 25;

  var start = null, control = null;
  var total_cubes = 0, cube_count = 0;
  var all_times = new Array();
  var running = false;

  var Timer = {};

  /* DOM */
  var body = $("body");
  var timer_button = $("#timer_button");

  var button_down_background_color = "#2a9fd6";
  var button_down_border_color = "#ffffff";
  var scramble_container = $("div.scrambleContainer>span.scramble");

  var timer_container = $(".timer");
  var list = $("#timerTimes ul");
  var list_items = $("#timerTimes ul li");
  var total_cubes_container = $(".cubes-amt").children("span");
  var delete_button = "<a href=\"#\" class=\"delete\">[x]</a>";
  var session_complete_message = "Session complete. Your times have been recorded. Feel free to continue cubing!"

  Timer.generateScramble = function(n){
    s = new scramble;
    result = s.get_random_moves(n);
    scramble_container.html(result);
  }

  Timer.run = function(){
    running = (running) ? false : true;
    start = new Date().getTime();
    if(running){
      interval = setInterval(timer,10);
    } else {
      clearInterval(interval);
      if(confirm("Would you like to accept this time?")){
        Timer.increment();
        Timer.addTime();
        Timer.updateStats();
      }
    }
  }

  Timer.increment = function(){
    total_cubes += 1;
    cube_count = (cube_count < AVG_AMT) ? cube_count + 1 : 1;
    total_cubes_container.html(total_cubes);
  }

  Timer.addTime = function(){
    current_time = timer_container.html();
    current_time_container = list.children("li.time-" + cube_count).children("span");

    current_time_container.html(current_time);
    all_times.push(parseFloat(current_time));

    Timer.generateScramble(SCRAMBLE_MOVES);
  }

  Timer.updateStats = function(){
    var times = $("#timerTimes ul li");
    var avgDisplay = $(".avg-12 span");
    updateSessionAvg();
    updateTotalAvg();

    if(total_cubes == AVG_AMT) Timer.postSessionAvg();

    $(".fastest").children("span").html(all_times.min());
    $(".slowest").children("span").html(all_times.max());
  }

  Timer.postSessionAvg = function(){
    var session_times = $("#timerTimes ul li").map(function(){
      return $(this).text().trim();
    }).get();

    session_params = {
      puzzle_type: "3x3",
      times: session_times
    }

    $.post( "/timer", session_params);
    alert(session_complete_message);
  }

  function updateSessionAvg(){
    var times = $("#timerTimes ul li");
    var session_times = new Array();
    var times_total = 0;
    if(total_cubes >= AVG_AMT){
      $.each(times,function(){
        session_times.push(parseFloat($(this).children("span").html()));
      });
      session_times.remove(session_times.min());
      session_times.remove(session_times.max());
      for(var i=0;i<session_times.length;i++){
        times_total += session_times[i]
      }
      $(".avg-session").children("span").html((times_total/(AVG_AMT-2)).toFixed(2));
    }
  }

  function updateTotalAvg(){
    var tmp_total = 0;
    for(var i=0;i<all_times.length;i++){
      tmp_total += all_times[i];
    }
    $(".avg-all").children("span").html((tmp_total/total_cubes).toFixed(2));
  }


  /* ? */
  var timer = function(){
    var t = new Date().getTime() - start;
    var elapsed = Math.floor(t / 10) / 100;
    $(".timer").html(elapsed.toFixed(2));
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
  body.on("click","a.delete",function(e){
    e.preventDefault();
    $(this).parent().remove();
    Timer.checkTimes();
  });

  body.keydown(function(e){
    if(e.keyCode == 32){
      e.preventDefault();
      if(!running){
        timer_button.css({
          "background-color" : button_down_background_color,
          "border-color" : button_down_border_color
        });
      }
    }
  });

  body.keyup(function(e){
    if(e.keyCode == 32){
      e.preventDefault();
      Timer.run();
      $("#timer_button").css({
        "background-color" : "#ff8800",
        "border-color" : "#ff8800"
      });
    }
  });

  $("#timer_button").click(function(){
    Timer.run();
    $(this).blur();
  })

  function init(){
    Timer.generateScramble(SCRAMBLE_MOVES);
  }

  init();
});
