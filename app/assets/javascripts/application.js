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
//= require jquery.mobile
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
  AVG_AMT = 12,
  SCRAMBLE_MOVES = 25;

	function init(){
	  generateScramble(SCRAMBLE_MOVES);
	}

  function generateScramble(n){
    s = new scramble;
    result = s.get_random_moves(n);
    $('#timerSection div.scrambleContainer>span.scramble').html(result);
  }
  
  function addTime(){
    var t = $('.timer').html();
    var list = $('#timerTimes ul');
    var list_items = $('#timerTimes ul li');
    if(list_items.length > AVG_AMT) list_items.last().remove();
    list.prepend('<li>' + t + ' <a href="#" class="delete">[x]</a></li>');
    generateScramble(SCRAMBLE_MOVES);
    checkTimes();
  }
  
  function checkTimes(){
    var times = $('#timerTimes ul li');
    var avgDisplay = $('.avg-12 span');
    var sum = 0;
    if(times.length >= AVG_AMT){
      $('#timerTimes ul li:lt(' + AVG_AMT + ')').each(function(){
        sum += parseFloat($(this).html());
      });
      avgDisplay.html((sum / AVG_AMT).toFixed(2));
    } else {
      avgDisplay.html('--');
    } 
  }

	function doTimer(){
		running = (running) ? false : true;
		start = new Date().getTime();
		if(running){
      interval = setInterval(timer,10);
    } else {
      clearInterval(interval);
      addTime();
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

  $('.well.mat').tap(function(e){
    $(this).css({'background':'#151515'});
    doTimer();
  });

  $('.well.mat').taphold(function(e){
    $(this).css({'background':'#244C0C'});
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
