// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const burger = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu__body');
burger.addEventListener("click", function (e) {
	menu.classList.toggle('open');
});


// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const swiper = new Swiper('.home-slider__slider', {
// 	// Optional parameters
// 	modules: [Navigation, Pagination],
// 	// loop: true,

// 	// If we need pagination
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 		renderBullet: function (index, className) {
// 			return '<span class="' + className + '">' + (index + 1) + "</span>";
// 		},
// 	},

// 	autoplay: {
// 		delay: 3000,
// 		disableOnInteraction: false,
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.home-slider__next',
// 		prevEl: '.home-slider__prev',
// 	},

// 	// And if we need scrollbar
// 	// scrollbar: {
// 	// 	el: '.swiper-scrollbar',
// 	// },
// });