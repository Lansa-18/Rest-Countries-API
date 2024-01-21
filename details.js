'use strict';

// Getting html elements
const header = document.querySelector('header');
const themeSwitcher = document.querySelector('.div-right');
const themeIcon = themeSwitcher.querySelector('use');
const detailsBody = document.querySelector('body');
const detailsContainer = document.querySelector('.details__container');
const detailsBackBtn = document.querySelector('.back__button');
const detailsBackBtnSvg = detailsBackBtn.querySelector('use');
const dataDetails = document.querySelector('.data__section--content');
const allBorderCountries = document.querySelectorAll(
  '.border__countries--item'
);

// GLOBAL VARIABLES
let currentTheme = 'dark-mode';

// FUNCTIONS

const validateTheme = () => {
  const isDarkMode = detailsBody.classList.toggle('dark-mode-bg');
  const darkSvgTheme = './assets/images/theme-mode-dark.svg#theme-color-dark';
  const lightSvgTheme =
    './assets/images/theme-mode-light.svg#theme-color-light';
  const detailsBackBtnSvgDark =
    './assets/images/back-icon-dark.svg#back-icon-dark';
  const detailsBackBtnSvgLight =
    './assets/images/back-icon-light.svg#back-icon-light';

  if (isDarkMode) {
    detailsBackBtnSvg.href.baseVal = detailsBackBtnSvgDark;
    themeIcon.href.baseVal = darkSvgTheme;
  } else {
    detailsBackBtnSvg.href.baseVal = detailsBackBtnSvgLight;
    themeIcon.href.baseVal = lightSvgTheme;
  }
};

const themeItems = () => {
  header.classList.toggle('dark-mode');
  header.classList.toggle('light-mode');
  detailsContainer.classList.toggle('dark-mode-bg');
  detailsContainer.classList.toggle('light-mode-bg');
  detailsBackBtn.classList.toggle('dark-mode');
  detailsBackBtn.classList.toggle('light-mode');
};

const updateThemeCountriesDetails = () => {
  allBorderCountries.forEach(borderCountry => {
    borderCountry.classList.toggle('dark-mode');
    borderCountry.classList.toggle('light-mode');
  });
  dataDetails.classList.toggle('dark-mode-text');
  dataDetails.classList.toggle('light-mode-text');
};

const changeGlobalTheme = () => {
  validateTheme();
  themeItems();
  updateThemeCountriesDetails();
};

const changeThemeItems = () => {
  changeGlobalTheme();
};

// EVENT LISTENERS
themeSwitcher.addEventListener('click', changeThemeItems);
