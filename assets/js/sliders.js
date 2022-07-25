/**
 * ABOUT US
 * 
**/


var swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	slidesPerView: 1,
	mousewheel: false,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	
	// Paginations bullet
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
		type: "fraction",
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// SLIDER START
// const swiper = new Swiper('.swiper', {
// 	spaceBetween: 24,
// 	slidesPerGroup: 1,
// 	loop: true,
// 	autoplay: {
// 		delay: 4000,
// 		disableOnInteraction: false,
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	breakpoints: {
// 		575: {
// 			slidesPerView: 2
// 		},

// 		768: {
// 			slidesPerView: 2
// 		},

// 		991: {
// 			slidesPerView: 3
// 		},
// 	},
// });