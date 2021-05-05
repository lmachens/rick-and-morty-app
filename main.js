import { createCharacterElement } from './components/character';
import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { getCharacters } from './utils/api';

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
          oninput: (event) => {
            removeAllChildren(characterSection);

            const search = event.target.value;
            getCharacters(search).then((characters) => {
              const characterElements = characters.map(createCharacterElement);
              characterSection.append(...characterElements);
            });
          },
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
