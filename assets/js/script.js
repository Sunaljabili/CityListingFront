$(document).ready(function(){

// NAVBAR STICKY START
$(window).scroll(function(){
  if($("html").scrollTop() >300){
    $("header").addClass("is-sticky");
  }else{
    $("header").removeClass("is-sticky");
  }
})

// NAVBAR STICKY END

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
      
// TO-TOP BUTTON START


$(window).scroll(function(){

  if($(this).scrollTop() > 300){
     $(".to-top").fadeIn();
  }else{
    $(".to-top").fadeOut();
  }
});

$(".to-top").click(function(){
  $("html,body").animate({scrollTop:0},"slow")
});

// TO-TOP BUTTON END

});