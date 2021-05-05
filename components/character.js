import './character.css';
import { createElement } from '../utils/elements';

export function createCharacterElement({
  imgSrc,
  name,
  status,
  species,
  origin,
}) {
  return createElement('div', {
    className: 'character-card',
    children: [
      createElement('img', { className: 'character-card__image', src: imgSrc }),
      createElement('article', {
        className: 'character-card__info',
        children: [
          createElement('h2', { innerText: name }),
          createElement('p', { innerText: `${status} - ${species}` }),
          createElement('p', { innerText: origin.name }),
        ],
      }),
    ],
  });
}
