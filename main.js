import { createCharacterElement } from './components/character';
import './style.css';
import { createElement } from './utils/elements';
import { getCharacters } from './utils/api';

getCharacters().then((characters) => {
  const characterElements = characters.map(createCharacterElement);
  characterSection.append(...characterElements);
});

const characterSection = createElement('section', {
  className: 'results',
});

const mainElement = createElement('main', {
  children: [
    createElement('header', {
      className: 'hero',
      children: [
        createElement('h1', {
          className: 'hero__title',
          innerText: 'Mick and Rorty',
        }),
        createElement('input', {
          className: 'input',
          placeholder: 'Search character',
          autofocus: true,
        }),
      ],
    }),
    characterSection,
    createElement('footer', {
      className: 'footer',
      children: [
        createElement('small', {
          className: 'footer__trademark',
          children: [
            createElement('span', { innerText: 'Made with ' }),
            createElement('span', { className: 'primary', innerText: '❤' }),
          ],
        }),
      ],
    }),
  ],
});

document.querySelector('#app').append(mainElement);
