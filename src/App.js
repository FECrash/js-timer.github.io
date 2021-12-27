import Menu from './components/menu/Menu.js';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import Modal from './components/modal/Modal.js';

export default class App {
  constructor(dom) {
    this.dom = dom;

    this.render();
    new Menu(document.querySelector('aside'));
    new Header(document.querySelector('header'));
    new Main(document.querySelector('main'));
    new Modal(document.querySelector('#open-modal'));
  }

  render() {
    this.dom.innerHTML = `
      <header></header>
      <main></main>
    `;
  }
}
