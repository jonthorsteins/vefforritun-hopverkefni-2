import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.img');
  }

  load() {
    empty(this.container);
  }
}
