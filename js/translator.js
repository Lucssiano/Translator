// Forma de simplificar los selectores para no escribirlos cada vez que se necesiten
function $$(selector) {
	return document.querySelectorAll(selector);
}

class Translator {
	constructor() {
		this._elements = $$('[data-i18n]');
		this._spanishChanges = {
			body: {
				title: 'Prueba',
				paragraph: 'El Diego',
			},
			secondBody: {
				title: 'Hola',
				paragraph: 'Como estás?',
			},
		};
		this._englishChanges = {
			body: {
				title: 'Exam',
				paragraph: 'The Diego',
			},
			secondBody: {
				title: 'Hello',
				paragraph: 'How are you?',
			},
		};
	}

	changeLanguage(lang) {
		let finalLang;
		switch (lang) {
			case 'es':
				finalLang = this._spanishChanges;
				break;
			case 'en':
				finalLang = this._englishChanges;
				break;
			default:
				console.error("Sorry , we can't translate the page");
		}
		this._elements.forEach((element) => {
			let text = element.dataset.i18n.split('.').reduce((obj, i) => obj[i], finalLang);
			if (text) {
				element.innerHTML = text;
			}
		});
	}
}

export default Translator;

// --- Forma de traductor sin la class , por lo tanto no se puede exportar a muchos archivos --- //
// const elements = $$('[data-i18n]');

// const spanishChanges = {
// 	body: {
// 		title: 'Prueba',
// 		paragraph: 'El Diego',
// 	},
// 	secondBody: {
// 		title: 'Hola',
// 		paragraph: 'Pene',
// 	},
// };

// const englishChanges = {
// 	body: {
// 		title: 'Exam',
// 		paragraph: 'The Diego',
// 	},
// 	secondBody: {
// 		title: 'Hello',
// 		paragraph: 'Dick',
// 	},
// };

// function translation(lang) {
// 	elements.forEach((element) => {
// 		let text = element.dataset.i18n.split('.').reduce((obj, i) => obj[i], lang);
// 		if (text) {
// 			element.innerHTML = text;
// 		}
// 	});
// }
// ------------- //

// const spanishButton = $('button.language.spanish');
// const englishButton = $('button.language.english');

// spanishButton.addEventListener('click', () => {
//     translation(spanishChanges);
// 	if (!spanishButton.classList.contains('active')) {
// 		spanishButton.classList.add('active');
// 		englishButton.classList.remove('active');
// 	}
// });
// englishButton.addEventListener('click', () => {
//     translation(englishChanges);
// 	if (!englishButton.classList.contains('active')) {
// 		englishButton.classList.add('active');
// 		spanishButton.classList.remove('active');
// 	}
// });

// ----------------------------------------------------------------------- //