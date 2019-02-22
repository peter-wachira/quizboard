/*
    Created on : Feb 8th, 2019, 8:39:38 PM
    Author     : Peter Wachira
*/
// scroll functions
$("#question1").click(function() {
  $('html,body,form').animate({
      scrollTop: $(".#question2").offset().top
    },
    'slow');
});
$("#question2").click(function() {
  $('html,body,form').animate({
      scrollTop: $("#question3").offset().top
    },
    'slow');
});
$("#question3").click(function() {
  $('html,body,form').animate({
      scrollTop: $("#question4").offset().top
    },
    'slow');
});
$("#question4").click(function() {
  $('html,body,form').animate({
      scrollTop:$("#question5").offset().top
    },
    'slow');
});
// scrolldown progress bar
$(window).scroll(function() {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
  scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;

  $("#progressbar").attr('value', position);

});

$(document).ready(function() {
  $("button").click(function() {
    $("#javascript-quiz").hide();
    $("#display").show();
  });
});
