$(document).ready(function(){
    $("#dropDown").hover(function(){
      $("#hidden_menu").slideToggle();
    });
});

$(document).ready(function(){
    $("#reg_icon").hover(function(){
      $("#reg_form").slideToggle();
    });
});




 var slideIndex = 1;
 showSlides(slideIndex);

 // Next/previous controls
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

// Thumbnail image controls
 function currentSlide(n) {
 showSlides(slideIndex = n);
 }

 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     if (n > slides.length) {slideIndex = 1} 
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none"; 
     }
     slides[slideIndex-1].style.display = "flex"; 
  }
  $(document).ready(function(){
    $("window").scroll(function(){
      $(".header").css( "display", "none");
      $(".header_2").css( "display", "fixed");
    });
  });



//  var x = 1;
//  slides(x)
//  //right
//  function rightSlide(n){
//      slides( x += n)
//  }
//  //left
//  function leftSlide(n){
//      slides( x = n)
//  }
//  function slides(n) {
//      var i
//      var y = document.getElementsByClassName("section")
//      if (n> y.length){ x = 1}
//      if (n<1){x = y.length}
//      for (i = 0; i <y.length; i++){
//         y[i].style.border = "none"
//         //y[i].style.border = "1px solid grey"; 

//      }
//      y[i].style.border = "flex"
//      y[x-1].style.display = "1px solid red"; 

//  }