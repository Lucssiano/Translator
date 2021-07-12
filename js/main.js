import Translator from './translator.js';

/* A way to simplify the selectors to avoid writing them every time i need it */
function $(selector) {
	return document.querySelector(selector);
}

let translator = new Translator({
	langSelected: '',
});

const spanishButton = $('button.language.spanish');
const englishButton = $('button.language.english');

spanishButton.addEventListener('click', () => {
	/* The language is selected */
	translator.langSelected = 'es';
    translator.changeLanguage(translator.langSelected);
	if (!spanishButton.classList.contains('active')) {
		spanishButton.classList.add('active');
		englishButton.classList.remove('active');
	}
});
englishButton.addEventListener('click', () => {
	/* The language is selected */
	translator.langSelected = 'en';
    translator.changeLanguage(translator.langSelected);
	if (!englishButton.classList.contains('active')) {
		englishButton.classList.add('active');
		spanishButton.classList.remove('active');
	}
});
