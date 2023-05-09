// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.icon-menu');
	const menu = document.querySelector('.menu__body');

	// if (filterBtn && filterBody && filterIcon) {
	const filterBtn = document.querySelector('.category__filter-btn');
	const filterBody = document.querySelector('.filter__body');
	const filterIcon = document.getElementById("filterIcon");

	function changeImage() {
		if (filterBody.classList.contains('open')) {
			filterIcon.src = "../img/icons/close.svg";
		} else {
			filterIcon.src = "../img/icons/filltr.svg";
		}
	}

	burger.addEventListener("click", function (e) {
		menu.classList.toggle('open');
	});

	filterBtn?.addEventListener("click", () => {
		filterBody.classList.toggle('open');
		changeImage();
	});
	// }

})