'use strict';
console.log('details.js loaded');

// Getting html elements
const detailsContainer = document.querySelector('.details__container');
const detailsBackBtn = document.querySelector('.back__button');
const detailsBackBtnSvg = detailsBackBtn.querySelector('use');
const dataDetails = document.querySelector('.data__section--content');
const allBorderCountries = document.querySelectorAll(
  '.border__countries--item'
);