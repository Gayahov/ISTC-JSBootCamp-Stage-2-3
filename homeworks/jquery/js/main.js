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

jQuery(function($) { 

  // settings
  var $slider = $('.slider'); // class or id of carousel slider
  var $slide = $('.mySlides'); // could also use 'img' if you're not using a ul
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 1000; // 4 seconds

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );

});


jQuery(document).ready(function($) {
  "use strict";
  $('#customers-testimonials').fadeIn( {
      loop: true,
      center: true,
      items: 3,
      margin: 30,
      autoplay: true,
      dots:true,
      nav:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      navText: ['<i class="fa fa-arrow-left" aria-hidden="true">','<i class="fa fa-arrow-right" aria-hidden="true">'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
    });
  });



//  var slideIndex = 1;
//  showSlides(slideIndex);

//  // Next/previous controls
//  function plusSlides(n) {
//    showSlides(slideIndex += n);
//  }

// // Thumbnail image controls
//  function currentSlide(n) {
//  showSlides(slideIndex = n);
//  }

//  function showSlides(n) {
//      var i;
//      var slides = document.getElementsByClassName("mySlides");
//      if (n > slides.length) {slideIndex = 1} 
//      if (n < 1) {slideIndex = slides.length}
//      for (i = 0; i < slides.length; i++) {
//          slides[i].style.display = "none"; 
//      }
//      slides[slideIndex-1].style.display = "flex"; 
//   }
//   $(document).ready(function(){
//     $("window").scroll(function(){
//       $(".header").css( "display", "none");
//       $(".header_2").css( "display", "fixed");
//     });
//   });



  (function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

jQuery(function($) {
        $('.timer').countTo({
            from: 20,
            to: 850,
            speed: 4000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
        $('.timer_2').countTo({
          from: 1,
          to: 18,
          speed: 5000,
          refreshInterval: 50,
          onComplete: function(value) {
              console.debug(this);
          }
      });
      $('.timer_3').countTo({
        from: 1,
        to: 21,
        speed: 5000,
        refreshInterval: 50,
        onComplete: function(value) {
            console.debug(this);
        }
      });
        $('.timer_4').countTo({
          from: 1,
          to: 16,
          speed: 5000,
          refreshInterval: 50,
          onComplete: function(value) {
              console.debug(this);
          }
     
    });
    });





    
	
      $(window).scroll(function(){
        var scrollnumber = $(this).scrollTop();
        
        if(scrollnumber>300){
          $(".head").addClass("scrollnav");
        }
        else{
          $(".head").removeClass("scrollnav");
        }
        console.log($(this).scrollTop());
      })
      $(".burger").click(function(){
        $(".menu").slideToggle();
      })
    
  
    