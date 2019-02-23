/*
    Created on : Feb 8th, 2019, 8:39:38 PM
    Author     : Peter Wachira
*/
// scroll functions
// scrolldown progress bar
$(window).scroll(function() {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
  scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;
  $("#progressbar").attr('value', position);

});
// unhide buttons  Dojo options
$(document).ready(function() {
  $("button ").click(function javascriptQuiz(){
    $("#css-hidden").hide();
    $("#html-hidden").hide();
    $("#js-hidden").slideToggle();
  });

});
$(document).ready(function() {
  $("button # ").click(function cssQuiz(){
    $("#css-hidden").hide();
    $("#js-hidden").hide();
    $("#html-hidden").slideToggle();
  });
});   
$(document).ready(function() {
  $("button ").click(function htmlQuiz(){
    $("#js-hidden").hide();
    $("#html-hidden").hide();
    $("#css-hidden").fadeIn();
  });
});
// calculating marks for each question
 function jsmarks() {
   // var score = 0;
   // $(".clac:checked").each(function() {
   //  score += parseInt($(this).val(), 10);
   // });
  alert("score")
 }
