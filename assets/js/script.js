const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value/2) + "%";
  slideValue.classList.add("show");
});
inputSlider.onblur = (()=>{
  slideValue.classList.remove("show");
});
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