//= require fastclick
//= require_tree .

// $(document).ready(function(){
//   #<{(| Balloons for scramble |)}>#
//   $('td.individual-solve')
//     .balloon({
//       tipSize: 24,
//        css: {
//          border: 'solid 4px #1A4F5A',
//          padding: '10px',
//          fontSize: '110%',
//          lineHeight: '3',
//          backgroundColor: '#000',
//          color: '#fff'
//        }
//      });
// });

// $(".timer.index").ready(function(){
//
//   #<{(| Avoid mobile delays |)}>#
//   FastClick.attach(document.body);
//
//   #<{(| Tab controls |)}>#
//   $(".notice, .alert")
//     .delay(500)
//     .fadeIn("normal", function() {
//       $(this).delay(1500).fadeOut();
//       $(".notice,.alert").hover().fadeOut();
//     });
//
//   var start = null, control = null, cube = null,
//       total_cubes = 0, cube_count = 0,
//       all_times = new Array(),
//       session_data = new Array(),
//       running = false;
//
//   #<{(| DOM |)}>#
//   var body = $("body"),
//       timer_button = $("#timer_button"),
//       timer_container = $(".timer_val"),
//       timer_list = $("#timerTimes ul"),
//       timer_list_items = $("#timerTimes ul li"),
//       total_cubes_container = $(".cubes-amt").children("span"),
//       avg_session = $('.avg-session'),
//       current_puzzle = current_puzzle_selector.val();
//
//   var delete_button = "<a href=\"#\" class=\"delete\">[x]</a>";
//
//   var Timer = {
//
//     modal_open: false,
//
//     generateScramble: function(){
//       result = cube.scramble();
//       scramble_container.html(result);
//     },
//
//     run: function(){
//       running = (running) ? false : true;
//       start = new Date().getTime();
//
//       if(running){
//         interval = setInterval(timer,10);
//       } else {
//         clearInterval(interval);
//         $.confirm("Would you like to accept this time?");
//       }
//     },
//
//     ok: function(){
//       this.increment();
//       this.addTime();
//       this.updateStats();
//     },
//
//     reset: function(){
//       total_cubes = 0;
//       all_times = [];
//       cube_count = 0;
//
//       timer_container.html('0:00');
//
//       timer_list_items.each(function(){
//         var _this = $(this);
//         var pos = _this.data('position');
//         _this.children('span').html(pos);
//       });
//
//       cube = new Cube(current_puzzle, SCRAMBLE_COUNT);
//       scramble_container.html(cube.scramble());
//
//       total_cubes_container.html(total_cubes);
//       this.updateStats();
//     },
//
//     increment: function(){
//       total_cubes += 1;
//       cube_count = (cube_count < AVG_AMT) ? cube_count + 1 : 1;
//       total_cubes_container.html(total_cubes);
//     },
//
//     addTime: function(){
//       let current_session_time = {};
//       let current_time = timer_container.html();
//       let current_time_container = timer_list
//         .children("li.time-" + cube_count)
//         .children("span");
//
//       #<{(| @TODO Collect data for display purposes.
//        * Eventually, this can be refactored to use session data |)}>#
//       current_time_container.html(current_time);
//       all_times.push(parseFloat(current_time).toFixed(2));
//
//       current_session_time.time = parseFloat(current_time);
//       current_session_time.scramble = scramble_container.text();
//       session_data.push(current_session_time);
//
//       this.generateScramble();
//     },
//
//     updateStats: function(){
//       var avgDisplay = $(".avg-12 span");
//       this.updateSessionAvg();
//       this.updateTotalAvg();
//
//         if(total_cubes == AVG_AMT) Timer.postSessionAvg();
//
//         $(".fastest").children("span").html(all_times.min() || '--');
//         $(".slowest").children("span").html(all_times.max() || '--');
//       },
//
//     postSessionAvg: function(){
//       let session_times = timer_list_items.map(function(){
//         return $(this).text().trim();
//       }).get();
//
//       let session_params = {
//         puzzle_type: current_puzzle,
//         session_data: { session_array: session_data }
//       };
//
//       $.ajaxSetup({
//         headers: {
//           'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
//         }
//       });
//
//       $.post( "/timer", session_params);
//       alert(session_complete_message);
//     },
//
//     updateSessionAvg: function(){
//       var session_times = new Array();
//       var times_total = 0;
//
//       if(total_cubes >= AVG_AMT){
//         $.each(timer_list_items ,function(){
//           session_times.push(parseFloat($(this).children("span").html()));
//         });
//
//         session_times.remove(session_times.min());
//         session_times.remove(session_times.max());
//
//         for(var i=0;i<session_times.length;i++){
//           times_total += session_times[i]
//         }
//
//         avg_session
//           .children("span")
//           .html((times_total/(AVG_AMT-2)).toFixed(2));
//       } else {
//         avg_session
//           .children("span")
//           .html("--");
//       }
//     },
//
//     updateTotalAvg: function(){
//       var avg;
//
//       if(!total_cubes){
//         avg = '--';
//       } else {
//         var tmp_total = 0;
//
//         for(var i=0;i<all_times.length;i++){
//           tmp_total += all_times[i];
//         }
//
//         avg = (tmp_total/total_cubes).toFixed(2);
//       }
//
//       $(".avg-all")
//         .children("span")
//         .html(avg);
//     }
//   }
//
//   #<{(| Timer |)}>#
//
//   #<{(| Prototype Methods |)}>#
//   Array.prototype.max = function() {
//     var max = this[0];
//     var len = this.length;
//     for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
//     return max;
//   }
//
//   Array.prototype.min = function() {
//     var min = this[0];
//     var len = this.length;
//     for (var i = 1; i < len; i++) if (this[i] < min) min = this[i];
//     return min;
//   }
//
//   Array.prototype.remove = function() {
//     var what, a = arguments, len = a.length, ax;
//     while (len && this.length) {
//       what = a[--len];
//       while ((ax = this.indexOf(what)) !== -1) {
//         this.splice(ax, 1);
//         break;
//       }
//     }
//     return this;
//   };
//
//   #<{(| Events |)}>#
//   body.on("click", "a.delete",function(e){
//     e.preventDefault();
//     $(this).parent().remove();
//     Timer.checkTimes();
//   });
//
//   body.on("keydown", function(e){
//     if(e.keyCode == 32 && !Timer.modal_open){
//       e.preventDefault();
//       if(!running)
//         timer_button.addClass("keydown");
//       else
//         timer_button.removeClass("active");
//     }
//   });
//
//   body.on("keyup", function(e){
//     if(e.keyCode == 32 && !Timer.modal_open){
//       e.preventDefault();
//
//       if(!running){
//         timer_button
//           .removeClass("keydown")
//           .addClass("active");
//       } else {
//         timer_button
//           .removeClass("active")
//       }
//
//       Timer.run();
//     }
//   });
//
//   $(document).on("click", "#timer_button", function(event){
//     event.preventDefault();
//     event.stopPropagation()
//
//     if(!running){
//       timer_button
//         .removeClass("keydown")
//         .addClass("active");
//     } else {
//       timer_button
//         .removeClass("active")
//     }
//
//     Timer.run();
//     $(this).blur();
//   })
//
//   current_puzzle_selector.on("change", function(){
//     current_puzzle = $(this).val();
//     Timer.reset();
//   });
//
//   #<{(| jQuery-UI alert |)}>#
//   $.extend({
//     alert: function (message, title) {
//       $("<div></div>").dialog({
//         buttons: { "Ok": function () { $(this).dialog("close"); } },
//         close: function (event, ui) { $(this).remove(); },
//         resizable: false,
//         title: title,
//         modal: true
//       }).text(message);
//     },
//     confirm: function(message, title) {
//       $("<div class=\"confirm\"></div>").dialog({
//         open: function(event, ui){
//           $(".ui-dialog-titlebar-close").hide();
//           Timer.modal_open = true;
//         },
//         buttons: {
//           "Ok": function() {
//             $(this).dialog("close");
//             Timer.ok();
//           },
//           "Cancel": function() {
//             $(this).dialog("close");
//           }
//         },
//         close: function(event, ui) {
//           Timer.modal_open = false;
//           $(this).remove();
//         },
//         resizable: false,
//         title: "",
//         modal: true
//       }).text(message);
//     }
//   });
//
  // function init(){
  //   scramble_container.html(initial_scramble);
  // }
//
//   init();
// });

/* 2021 Update: Pure JS version */

const MSG_SESSION_COMPLETE = 'Session complete. ' +
  'Your times have been recorded. ' +
  'Feel free to continue cubing!';

window.addEventListener('DOMContentLoaded', (event) => {
  const scramble_container = document.querySelector('.scrambleContainer .scramble');
  const current_puzzle_selector = document.getElementById('current_puzzle');
  const timer_container = document.querySelector('.timer_val');
  const timer_button = document.getElementById('timer_button');

  const AVG_AMT = 12;
  const SCRAMBLE_COUNT = 25;
  const DEFAULT_CUBE = current_puzzle_selector.value || "cube_3x3";

  const cube = new Cube(DEFAULT_CUBE, SCRAMBLE_COUNT);
  const timer = new Timer({ view: timer_container });

  const initial_scramble = cube.scramble();

  scramble_container.innerText = initial_scramble;

  const start_stop_timer = (event) => {
    if(!timer.running){
      timer_button.classList.remove('keydown')
      timer_button.classList.add('active');
      timer.run();
    } else {
      timer.stop();
      timer_button.classList.remove('active');

      /* Queue isn't cleared. Is the stopwatch fn too BIG? */
      /* Can we do this wit a promise? HOW DO PPL USE THIS */
      /* I dont think its too big. It does this with just toFixed(3) */
      /*** Need modal ? something that doesn't lock the DOM?
      /* window.confirm('Would you like to accept this time?');*/
    }

    timer_button.blur();
  }

  timer_button.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation()

    start_stop_timer(event);
  }

  document.onkeydown = (event) => {
    if(event.keyCode == 32) {
      event.preventDefault();
      if(!timer.running) timer_button.classList.add('keydown');
    }
  }

  document.onkeyup = (event) => {
    if(event.keyCode == 32) start_stop_timer(event);
  }
});

class Timer {
  constructor(params) {
    this.view = params.view;
    this.running = false;
    this.start;
    this.interval;
  }

  run() {
    this.running = this.running ? false : true;
    this.start = new Date().getTime();
    this.interval = setInterval(() => this.stopwatch(this.start, this.view), 10);
  }

  stop() {
    clearInterval(this.interval);
    this.running = false;
  }

  stopwatch(start, view) {
    const t = new Date().getTime() - this.start;
    const elapsed = Math.floor(t / 10) / 100;
    view.innerHTML = this.format_time(elapsed);
  }

  format_time(seconds) {
    const pad = (num, size) => ('000' + num).slice(size * -1);
    const t = parseFloat(seconds).toFixed(2);
    const h = Math.floor(t / 60 / 60);
    const m = Math.floor(t / 60) % 60;
    const s = Math.floor(t - m * 60);
    const ms = t.slice(-2);

    const display_hours = (seconds > 3600) ? pad(h, 2) + ':' : '';
    const display_minutes = (seconds > 60) ? pad(m, 2) + ':' : '';

    return display_hours + display_minutes + pad(s, 2) + '.' + pad(ms, 2);
  }
};

/* things to do
 *
 *. 2. add time to time list and reset timer
 *. */



















