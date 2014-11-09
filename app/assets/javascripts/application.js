// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var ready = function(){

  /* Tab controls */
  $('.notice,.alert').delay(500).fadeIn('normal', function() {
    $(this).delay(1500).fadeOut();
    $('.notice,.alert').hover().fadeOut();
  });

  /* Timer */

  /* @TODO isMobile, fullscreen touch, remove mobile 300ms touch lag, etc. */
  /* @TODO  Export functionality. Build database for times 1. import writes to db, 2. sessions write to db (via AJAX)     */

  var running = false,
  start = null,
  control = null,
  total_cubes = 0,
  cube_count = 0,
  AVG_AMT = 12,
  SCRAMBLE_MOVES = 25;

  var all_times = new Array();

  function init(){
    generateScramble(SCRAMBLE_MOVES);
  }

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
      var what, a = arguments, L = a.length, ax;
      while (L && this.length) {
          what = a[--L];
          while ((ax = this.indexOf(what)) !== -1) {
              this.splice(ax, 1);
              break;
          }
      }
      return this;
  };

  function generateScramble(n){
    s = new scramble;
    result = s.get_random_moves(n);
    $('#timerSection div.scrambleContainer>span.scramble').html(result);
  }

  function addTime(){
    total_cubes += 1;
    cube_count = (cube_count < AVG_AMT) ? cube_count + 1 : 1;
    var t = $('.timer').html();
    var list = $('#timerTimes ul');
    var list_items = $('#timerTimes ul li');
    var delete_button = '<a href="#" class="delete">[x]</a>';
    all_times.push(parseFloat(t));
    list.children('li.time-' + cube_count).children('span').html(t);
    $('.cubes-amt').children('span').html(total_cubes);
    generateScramble(SCRAMBLE_MOVES);
    updateStats();
  }

  function updateStats(){
    var times = $('#timerTimes ul li');
    var avgDisplay = $('.avg-12 span');
    updateSessionAvg();
    updateTotalAvg();
    $('.fastest').children('span').html(all_times.min());
    $('.slowest').children('span').html(all_times.max());
  }

  function updateSessionAvg(){
    var times = $('#timerTimes ul li');
    var session_times = new Array();
    var times_total = 0;
    if(total_cubes >= AVG_AMT){
      $.each(times,function(){
        session_times.push(parseFloat($(this).children('span').html()));
      });
      session_times.remove(session_times.min());
      session_times.remove(session_times.max());
      for(var i=0;i<session_times.length;i++){
        times_total += session_times[i]
      }
      $('.avg-session').children('span').html((times_total/(AVG_AMT-2)).toFixed(2));
    }
  }

  function updateTotalAvg(){
    var tmp_total = 0;
    for(var i=0;i<all_times.length;i++){
      tmp_total += all_times[i];
    }
    $('.avg-all').children('span').html((tmp_total/total_cubes).toFixed(2));
  }

  function doTimer(){
    running = (running) ? false : true;
    start = new Date().getTime();
    if(running){
      interval = setInterval(timer,10);
    } else {
      clearInterval(interval);
      if(confirm('Would you like to accept this time?')) addTime();
    }
  }

  $(document).on('click','a.delete',function(event){
    event.preventDefault();
    $(this).parent().remove();
    checkTimes();
  });

  $('body').keydown(function(e){
    if(e.keyCode == 32){
      e.preventDefault();
      if(!running){
        $('#timer_button').css({
          'background-color' : '#2a9fd6',
          'border-color' : '#FFFFFF'
        });
      }
    }
  });

  $('body').keyup(function(e){
    if(e.keyCode == 32){
      e.preventDefault();
      doTimer();
      $('#timer_button').css({
        'background-color' : '#ff8800',
        'border-color' : '#ff8800'
      });
    }
  });

  $('#timer_button').click(function(){
    doTimer();
    $(this).blur();
  })

  var timer = function(){
    var t = new Date().getTime() - start;
    var elapsed = Math.floor(t / 10) / 100;
    $('.timer').html(elapsed.toFixed(2));
  }

  init();

}

//turbolinks fix
$(document).ready(ready);
$(document).on('page:load', ready);
