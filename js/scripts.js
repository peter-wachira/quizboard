/*
    Created on : Feb 8th, 2019, 8:39:38 PM
    Author     : Peter Wachira
*/
// page reset
//Business logic


//navigation  panel

$("#resetjs").click(function reset() {
  $('html,body').animate({
      scrollTop: $(".container").offset().top
    },
    'slow');
});
$("#resetcss").click(function reset() {
  $('html,body').animate({
      scrollTop: $(".container").offset().top
    },
    'slow');
});
$("#resethtml").click(function reset() {
  $('html,body').animate({
      scrollTop: $(".container").offset().top
    },
    'slow');
});

// Un hide buttons  Dojo options
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

//
// // IDEA:  calculating marks for each question  using a loop that loops through all the radio buttons per question
 $(document).ready(function(){
   $("button#jsSubmit").click(function jsmarks(event){
     var score = 0;
     $("input:radio[name=js1]:checked,input:radio[name=js2]:checked,input:radio[name=js3]:checked,input:radio[name=js4]:checked,input:radio[name=js5]:checked").each(function() {
       count = score += parseInt($(this).val());
       percentage = (count/50)*100;
     });
    document.getElementById("js-results").innerHTML = " your percentage score was " + percentage + "%";
  });
 });

 $(document).ready(function(){
   $("button#cssSubmit").click(function cssmarks(event){
     var score = 0;
     $("input:radio[name=css1]:checked,input:radio[name=css2]:checked,input:radio[name=css3]:checked,input:radio[name=css4]:checked,input:radio[name=css5]:checked").each(function() {
     // score += parseInt($(this).val());
     count = score += parseInt($(this).val());
     percentage = (count/50)*100;
     });
      document.getElementById("css-results").innerHTML = " your percentage score was " + percentage + "%";
  });
 });

 $(document).ready(function(){
   $("button#htmlSubmit").click(function htmlmarks(event){
     var score = 0;
     $("input:radio[name=html1]:checked,input:radio[name=html2]:checked,input:radio[name=html3]:checked,input:radio[name=html4]:checked,input:radio[name=html5]:checked").each(function() {
       count = score += parseInt($(this).val());
       percentage = (count/50)*100;
     });
    document.getElementById("html-results").innerHTML = " your percentage score was " + percentage + "%";
  });
 });
//diplay results
 // scrolldown progress bar
 $(window).scroll(function() {
   var s = $(window).scrollTop(),
     d = $(document).height(),
     c = $(window).height();
   scrollPercent = (s / (d - c)) * 100;
   var position = scrollPercent;
   $("#progressbar").attr('value', position);
 });
