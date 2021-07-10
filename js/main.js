import Translator from './translator.js';
// Forma de simplificar los selectores para no escribirlos cada vez que se necesiten
function $(selector) {
	return document.querySelector(selector);
}
function $$(selector) {
	return document.querySelectorAll(selector);
}

let translator = new Translator({
	langSelected: '',
});

const spanishButton = $('button.language.spanish');
const englishButton = $('button.language.english');

spanishButton.addEventListener('click', () => {
	translator.langSelected = 'es';
    translator.changeLanguage(translator.langSelected);
	if (!spanishButton.classList.contains('active')) {
		spanishButton.classList.add('active');
		englishButton.classList.remove('active');
	}
});
englishButton.addEventListener('click', () => {
	translator.langSelected = 'en';
    translator.changeLanguage(translator.langSelected);
	if (!englishButton.classList.contains('active')) {
		englishButton.classList.add('active');
		spanishButton.classList.remove('active');
	}
});
