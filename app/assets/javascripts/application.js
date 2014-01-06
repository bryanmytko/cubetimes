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


$(function() {
  
/* Tab controls */
$('.notice,.alert').delay(500).fadeIn('normal', function() {
  $(this).delay(1500).fadeOut();
  $('.notice,.alert').hover().fadeOut();
});

/* Timer */
var running = false,
start = null,
control = null;

$('#timer_button').click(function(){
  running = (running) ? false : true;
  start = new Date().getTime();
  if(running) timer();
  else $timeout.cancel(control);
})

function start_timer(){
  console.log('timer started...')
}

function end_timer(){
  console.log('timer stopped...')
}

time = {
  s: 0.00,
  ms: 0.00
}

console.log(time.s)
console.log(time.ms)

var timer = function(){
   var t = new Date().getTime() - start;
   var elapsed = Math.floor(t / 10) / 100;
   if(Math.round(elapsed) == elapsed) elapsed += '.0';
   time.s = elapsed;
   console.log(time.s)
   timer();
}

/*$scope.switch = function(){
angular.element('body').removeClass('ready');
 start = new Date().getTime();
 if(!running){
   console.log('starting!');
   running = true;
   timer();
 } 
 else{
   console.log('ended.');
   $timeout.cancel(control);
   running = false;
 }
}*/
   
   
   
   
});
