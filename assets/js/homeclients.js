// const slider = tns({
//   container: ".clientslide",
//   slideBy: 1,
//   autoplay: true,
//   nav: false,
//   controls: false,
//   mouseDrag: false,
//   autoplayButtonOutput: false,
//   loop: true,
//   speed: 10000,
//   autoplayTimeout: 800,
//   responsive: {
//     0: {
//       items: 1,
//       gutter: 0,
//     },
//     360: {
//       items: 2,
//       gutter: 8,
//     },
//     768: {
//       items: 3,
//       gutter: 16,
//     },
//     992: {
//       items: 4,
//       gutter: 24,
//     },
//     1200: {
//       items: 5,
//       gutter: 40,
//     },
//   },
// });

$(".clientLogo").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  cssEase: "linear",
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
