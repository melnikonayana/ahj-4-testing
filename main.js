/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/mir.png
const mir_namespaceObject = __webpack_require__.p + "ee68fa66dc6ee5f0e302.png";
;// CONCATENATED MODULE: ./src/img/visa.png
const visa_namespaceObject = __webpack_require__.p + "fa273a52504972a5c28c.png";
;// CONCATENATED MODULE: ./src/img/mastercard.png
const mastercard_namespaceObject = __webpack_require__.p + "833c5ede4bd43c336f09.png";
;// CONCATENATED MODULE: ./src/img/americanexpress.png
const americanexpress_namespaceObject = __webpack_require__.p + "c0d9cac5039e03d254b8.png";
;// CONCATENATED MODULE: ./src/img/discover.png
const discover_namespaceObject = __webpack_require__.p + "e821bfb01699d6482c30.png";
;// CONCATENATED MODULE: ./src/img/jcb.png
const jcb_namespaceObject = __webpack_require__.p + "176381317aed82119b20.png";
;// CONCATENATED MODULE: ./src/img/dinersclub.png
const dinersclub_namespaceObject = __webpack_require__.p + "63d33cd6f1c359d0d594.png";
;// CONCATENATED MODULE: ./src/js/validators.js
function isValidLuhn(value) {
  let sum = 0;
  if (value.length < 13 || value.length > 19) return false;
  for (let i = 0; i < value.length; i += 1) {
    let digit = Number(value[i]);
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit = digit % 10 + 1;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/creditcardissuer.js
function creditCardIssuer(value) {
  const checkStr = value.substring(0, 2);
  if (checkStr === '22') {
    return 'mir';
  }
  if (value.startsWith('4')) {
    return 'visa';
  }
  if (['51', '52', '53', '54', '55'].includes(checkStr)) {
    return 'mastercard';
  }
  if (['34', '37'].includes(checkStr)) {
    return 'americanexpress';
  }
  if (['60', '62', '64', '65'].includes(checkStr)) {
    return 'discover';
  }
  if (checkStr === '35') {
    return 'jcb';
  }
  if (['30', '36'].includes(checkStr)) {
    return 'dinersclub';
  }
  return '';
}
;// CONCATENATED MODULE: ./src/js/widget.js









class CardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onSubmit = this.onSubmit.bind(this);
  }
  static get markup() {
    return `
		<h1> Check your credit card number </h1>
        <div class="cards">    
			<img src="${mir_namespaceObject}" alt="Mir" class="card mir">       
			<img src="${visa_namespaceObject}" alt="Visa" class="card visa">
			<img src="${mastercard_namespaceObject}" alt="Mastercard" class="card mastercard">
			<img src="${americanexpress_namespaceObject}" alt="American Express" class="card americanexpress">
			<img src="${discover_namespaceObject}" alt="Discover" class="card discover">
			<img src="${jcb_namespaceObject}" alt="JCB" class="card jcb">
			<img src="${dinersclub_namespaceObject}" alt="Diners Club" class="card dinersclub">
		</div>		
        <form class="card-form-widget">
            <div class="control">
                
                <input type="text" id="card-input" class="input" placeholder="Credit card number">
            </div>
            <button class="submit">Click to Validate</button>
        </form>
        `;
  }
  static get submitSelector() {
    return '.submit';
  }
  static get inputSelector() {
    return '.input';
  }
  static get selector() {
    return '.card-form-widget';
  }
  bindToDOM() {
    this.parentEl.innerHTML = CardFormWidget.markup;
    this.element = this.parentEl.querySelector(CardFormWidget.selector);
    this.submit = this.element.querySelector(CardFormWidget.submitSelector);
    this.input = this.element.querySelector(CardFormWidget.inputSelector);
    this.element.addEventListener('submit', this.onSubmit);
  }
  onSubmit(e) {
    e.preventDefault();
    const {
      value
    } = this.input;
    const issuer = creditCardIssuer(value);
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('active-card'));
    if (issuer !== '') {
      const activeCard = document.querySelector(`.${issuer}`);
      activeCard.classList.add('active-card');
    }
    if (isValidLuhn(value)) {
      this.input.classList.add('valid');
      this.input.classList.remove('invalid');
    } else {
      this.input.classList.add('invalid');
      this.input.classList.remove('valid');
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const form = new CardFormWidget(container);
  form.bindToDOM();
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;