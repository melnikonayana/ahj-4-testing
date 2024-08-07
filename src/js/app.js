import CardFormWidget from './widget.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const form = new CardFormWidget(container);

  form.bindToDOM();
});
