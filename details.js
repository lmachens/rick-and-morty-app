import './style.css';
import styles from './details.module.css';
import { createElement } from './utils/elements';
import { getCharacter } from './utils/api';

const params = new URLSearchParams(location.search);
const characterId = params.get('id');

getCharacter(characterId).then((response) => console.log(response));

const mainElement = createElement('main', {
  className: styles.main,
  innerText: 'Hallo',
});

document.querySelector('#app').append(mainElement);
