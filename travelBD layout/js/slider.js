//section destination slider ========================================================================================================================================================================
$(document).ready(function () {
  // Инициализируем Slick Slider
  var destinationSlider = $(".destination__container").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    dots: true,
    adaptiveHeight: true,
    speed: 600,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2500,
    touchThreshold: 10,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  });
});
//section reviews slider ========================================================================================================================================================================
$(document).ready(function () {
  // Инициализируем Slick Slider
  var destinationSlider = $(".reviews__container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3500,
    touchThreshold: 10,
    fade:true,
    arrows:false,
    waitForAnimate: false,

  });
});