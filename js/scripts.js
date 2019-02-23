/*
    Created on : Feb 8th, 2019, 8:39:38 PM
    Author     : Peter Wachira
*/
// page reset
function pageReset() {
    window.location.reload();
}
$("#reset").click(function() {
  $('html,body').animate({
      scrollTop: $(".container").offset().top
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
// unhide buttons  Dojo options
$(document).ready(function() {
  $("button#js-nav").click(function javascriptQuiz(){
    $("#css-hidden").hide();
    $("#html-hidden").hide();
    $("#js-hidden").slideToggle();
  });

});
$(document).ready(function() {
  $("button#html-nav").click(function cssQuiz(){
    $("#css-hidden").hide();
    $("#js-hidden").hide();
    $("#html-hidden").slideToggle();
  });
});
$(document).ready(function() {
  $("button#css-nav").click(function htmlQuiz(){
    $("#js-hidden").hide();
    $("#html-hidden").hide();
    $("#css-hidden").fadeIn();
  });
});
// IDEA:  calculating marks for each question  using a loop
 // function jsmarks() {
 //   var score = 0;
 //   $("count:checked").each(function() {
 //    score += parseInt($(this).val(),10);
 //   });
 //  alert(score);
 // }
