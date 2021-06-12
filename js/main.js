$(document).ready(function(){
   $('.teachers__slider').slick({
      arrows:true,  
      // adaptiveHeight:true,
      infinitye:true,
      slidesToScroll:3,
      slidesToShow:3,
      autoplay:true, 
      speed:500, 
      autoplaySpeed:1000, 
      pauseOnFocus:true,
      pauseOnHover:true,
      prevArrow: $('.slick-btn-prev'),
      nextArrow: $('.slick-btn-next')



   });
});