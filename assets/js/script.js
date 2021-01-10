$(document).ready(function(){

// TESTIMONIAL SLICK PLUGIN START
    if($(".one-time").length){
        $('.one-time').slick({
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<i class="fal fa-chevron-left"></i>',
            nextArrow: '<i class="fal fa-chevron-right"></i>',
          });
    }
// TESTIMONIAL SLICK PLUGIN END
      

$(window).scroll(function(){
  if($("html").scrollTop() >300){
    $("header").addClass("is-sticky");
  }else{
    $("header").removeClass("is-sticky");
  }
})


});