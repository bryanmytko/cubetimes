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

//turbolinks fix 
$(document).on('page:load', function() {
  
/* Tab controls */
$('.notice,.alert').delay(500).fadeIn('normal', function() {
  $(this).delay(1500).fadeOut();
  $('.notice,.alert').hover().fadeOut();
});

/* Timer */

/* @TODO isMobile, fullscreen touch, remove mobile 300ms touch lag, etc. */
/* @TODO Display times per session. Create this view area. Detect when session is over. Export functionality. Build database for times 1. import writes to db, 2. sessions write to db. */

var running = false,
start = null,
control = null;

function doTimer(){
  running = (running) ? false : true;
  start = new Date().getTime();
  if(running) interval = setInterval(timer,10);
  else clearInterval(interval);
}

$('body').keyup(function(e){
	if(e.keyCode == 32) doTimer();
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
   
});
