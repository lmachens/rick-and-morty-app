import './style.css';
import styles from './details.module.css';
import { createElement } from './utils/elements';

const params = new URLSearchParams(location.search);
const characterId = params.get('id');

const mainElement = createElement('main', {
  className: styles.main,
  innerText: 'Hallo',
});

document.querySelector('#app').append(mainElement);
