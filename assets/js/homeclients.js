const clientSlider = new Swiper(".clientSlider", {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
  breakpoints: {
    '0': {
      slidesPerView: 1
    },
    '360': {
      slidesPerView: 2,
      spaceBetween: 20
    },
    '768': {
      slidesPerView: 3
    },
    '992': {
      slidesPerView: 4
    },
    '1200': {
      slidesPerView: 5
    }
  }
});