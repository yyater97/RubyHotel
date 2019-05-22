(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
      $("#top-navbar").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
      $("#top-navbar").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //top-slider
  var interleaveOffset = 0.5;
  var swiper = new Swiper('.masthead .swiper-container', {
    autoplay: {
      delay: 6000,
    },
    loop: true,
    speed: 1000,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  //about us slider
  var aboutUSSwiper = new Swiper('#about-us .swiper-container', {
    autoplay: {
      delay: 6000,
    },
    loop: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  //roomlist
  var roomListSwiper = new Swiper('#room-category .swiper-container', {
    slidesPerColumn: 3,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      clickable: true,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  //set animation duration, delay
  var createAnimation = function(tag){
      $(tag).each(function(){
        var animDelay = $(this).attr('data-animation-delay');
        if(animDelay!=null){
          $(this).css('animation-delay',animDelay);
          $(this).css('-webkit-animation-delay',animDelay);
          $(this).css('-moz-animation-delay',animDelay);
          $(this).css('-o-animation-delay',animDelay);
          $(this).css('animation-fill-mode','both');
        }
        
        var animDuration = $(this).attr('data-animation-duration');
        if(animDuration!=null){
          $(this).css('animation-duration',animDuration);
          $(this).css('-webkit-animation-duration',animDuration);
          $(this).css('-moz-animation-duration',animDuration);
          $(this).css('-o-animation-duration',animDuration);
          $(this).css('animation-fill-mode','both');
        }
    });
  }

  var addAnimation = function(tag){
    $(tag).each(function(){
      var animName = $(this).attr('data-animation-name');
      if(animName == null){
        animName = 'fadeInDown';
      }
      $(this).addClass(animName);
    });
  }

  var removeAnimation = function(tag){
    $(tag).each(function(){
      var animName = $(this).attr('data-animation-name');
      if(animName == null){
        animName = 'fadeInDown';
      }
      $(this).removeClass(animName);
    });
  }

  //add animation into portfolio section element
  var animationInPortfolio = function(){
    var delayTime = 0;
    $('#portfolio .wow').each(function(){
      $(this).attr('data-wow-duration','1.5s');
      $(this).attr('data-wow-delay',delayTime+'s');
      delayTime+=0.2;
    });
  };
  animationInPortfolio();

  //add background allow current img in slide
  var addBackFollowImage = function(){
    var urlImg = $('#about-us .swiper-container .swiper-slide-active img').attr('src');
    $('#about-us').css('background-image','linear-gradient(to bottom, rgba(215, 215, 215, 0.5) 0%, rgba(215, 215, 215, 0.5) 100%), url(../'+urlImg+')');
  }
  addBackFollowImage();

  $(document).ready(function(){
    createAnimation('.swiper-slide .animation');
    addAnimation('.swiper-slide-active .animation'); 

    //slide change transition start event
    swiper.on('slideChangeTransitionStart', function(){
      removeAnimation('.swiper-slide .animation');
      addAnimation('.swiper-slide-active .animation');  
    });

    aboutUSSwiper.on('slideChangeTransitionStart', function(){
      removeAnimation('.swiper-slide .animation');
      addAnimation('.swiper-slide-active .animation');
      addBackFollowImage();
    });
  });

})(jQuery); // End of use strict
