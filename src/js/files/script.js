// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const burger = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu__body');
burger.addEventListener("click", function (e) {
	menu.classList.toggle('open');
});
