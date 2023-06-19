/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	if (document.querySelector('.home-slider__slider')) { // Указываем скласс нужного слайдера
		new Swiper('.home-slider__slider', { // Указываем скласс нужного слайдера
			modules: [Navigation, Pagination],
			speed: 800,
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			pagination: {
				el: ".home-slider__pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index < 10 ? '0' + (index + 1) : (index + 1)) + "</span>";
				},
			},

			navigation: {
				nextEl: '.home-slider__next',
				prevEl: '.home-slider__prev',
			},

			breakpoints: {
				768: {
					spaceBetween: 30,
				},
			},

			on: {
			}
		});
	}

	if (document.querySelector('.license__slider')) { // Указываем скласс нужного слайдера
		new Swiper('.license__slider', { // Указываем скласс нужного слайдера
			modules: [Navigation],
			speed: 800,
			slidesPerGroup: 1,
			loop: true,
			autoHeight: true,

			navigation: {
				nextEl: '.license__next',
				prevEl: '.license__prev',
			},

			breakpoints: {
				1300: {
					spaceBetween: 15,
					slidesPerView: 3,
				},
				992: {
					spaceBetween: 10,
					slidesPerView: 2.3,
				},
				768: {
					spaceBetween: 10,
					slidesPerView: 3,
				},
				479: {
					spaceBetween: 7,
					slidesPerView: 2.4,
				},
				320: {
					spaceBetween: 5,
					slidesPerView: 2.1,
				},
			},

			on: {
			}
		});
	}

	if (document.querySelector('.slider-product__swiper-preview')) {
		const thumbsSwiper = new Swiper('.slider-product__swiper-preview', {
			direction: 'vertical',
			loop: true,
			slidesPerView: 3,
			slidesPerGroupSkip: 1,
			effect: 'fade',
			spaceBetween: 10,
		});

		const swiper = new Swiper('.slider-product__swiper', {
			modules: [Navigation, Thumbs],
			direction: 'vertical',
			loop: true,
			effect: 'fade',
			thumbs: {
				swiper: thumbsSwiper
			}
		});
	}
}






































// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});