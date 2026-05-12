// $(document).ready(function () {
//   $(".testimonial_slide").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: true, 
//     // dots: true,
//     prevArrow:'<i class="fa-solid fa-circle-arrow-left"></i>',
//     nextArrow:'<i class="fa-solid fa-circle-arrow-right"></i>'

//   });
// });
  $('.testimonial_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: true,
    dots: false,
    speed: 700,

    prevArrow: `
      <button type="button" class="slick-prev custom_arrow">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
    `,

    nextArrow: `
      <button type="button" class="slick-next custom_arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    `
  });