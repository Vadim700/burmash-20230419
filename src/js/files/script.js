// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const burger = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu__body');
burger.addEventListener("click", function (e) {
	menu.classList.toggle('open');
});


const filterBtn = document.querySelector('.category__filter-btn');
const filterBody = document.querySelector('.filter__body');
const filterIcon = document.getElementById("filterIcon");

filterBtn.addEventListener("click", () => {
	filterBody.classList.toggle('open');
	changeImage();
});

function changeImage() {
	if (filterBody.classList.contains('open')) {
		filterIcon.src = "../img/icons/close.svg";
	} else {
		filterIcon.src = "../img/icons/filltr.svg";
	}
}