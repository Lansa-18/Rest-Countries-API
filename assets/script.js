'use strict';
console.log('Hello Mr Lansa');

// Getting Html Elements
const body = document.querySelector('body');
const header = document.querySelector('header');
const input = document.querySelector('.enquiries-input');
const inputField = document.querySelector('.enquiries-input-field');
const filter = document.querySelector('.enquiries-filter');
const filterDropdown = document.querySelector('.filter__dropdown');
const countriesContainer = document.querySelector('.countries-grid-container');
const themeSwitcher = document.querySelector('.div-right');
const themeSwitcherDark = document.querySelector('.theme-icon-dark');
const themeIcon = themeSwitcher.querySelector('use');
const inputIcon = document.querySelector('.input-search-icon-dark');
const inputSvg = inputIcon.querySelector('use');
const filterIcon = document.querySelector('.enquiries-filter-icon');
const filterSvg = filterIcon.querySelector('use');

// GLOBAL VARIABLES
let currentTheme = 'dark-mode';

// FUNCTIONS

const changeThemeItems = () => {
  changeGlobalTheme();
};

const validateTheme = () => {
  const isDarkMode = body.classList.toggle('dark-mode-bg');
  const darkSvgTheme = './assets/images/theme-mode-dark.svg#theme-color-dark';
  const lightSvgTheme =
    './assets/images/theme-mode-light.svg#theme-color-light';
  const inputSvgDark = './assets/images/search-icon-dark.svg#search-icon-dark';
  const inputSvgLight =
    './assets/images/search-icon-light.svg#search-icon-light';
  const filterSvgDark =
    './assets/images/chevron-down-dark.svg#chevron-down-dark';
  const filterSvgLight =
    './assets/images/chevron-down-light.svg#chevron-down-light';

  if (isDarkMode) {
    body.classList.remove('light-mode-bg');
    currentTheme = 'dark-mode';
    themeIcon.href.baseVal = darkSvgTheme;
    inputSvg.href.baseVal = inputSvgDark;
    filterSvg.href.baseVal = filterSvgDark;
  } else {
    body.classList.add('light-mode-bg');
    currentTheme = 'light-mode';
    themeIcon.href.baseVal = lightSvgTheme;
    inputSvg.href.baseVal = inputSvgLight;
    filterSvg.href.baseVal = filterSvgLight;
  }
};

const themeItems = () => {
  header.classList.toggle('dark-mode');
  header.classList.toggle('light-mode');
  input.classList.toggle('dark-mode');
  input.classList.toggle('light-mode');
  inputField.classList.toggle('dark-mode');
  inputField.classList.toggle('light-mode');
  filter.classList.toggle('dark-mode');
  filter.classList.toggle('light-mode');
  filterDropdown.classList.toggle('dark-mode');
  filterDropdown.classList.toggle('light-mode');
};

const updateThemeCountries = () => {
  // Update the class themes of all the countries
  const countries = document.querySelectorAll('.country');
  const countryDatas = document.querySelectorAll('.country__data');
  countries.forEach(country => {
    country.classList.remove('dark-mode', 'light-mode');
    country.classList.add(currentTheme);
  });
  countryDatas.forEach(countryData => {
    countryData.classList.remove('dark-mode', 'light-mode');
    countryData.classList.add(currentTheme);
  });
};

const changeGlobalTheme = () => {
  validateTheme();
  themeItems();
  updateThemeCountries();
};

const displayCountries = data => {
  const html = `
      <article class="country ${currentTheme}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data ${currentTheme}">
          <h3 class="country__name">${data.name}</h3>
          <p class="country__row"><span>Population:</span>${data.population}</p>
          <p class="country__row"><span>Region:</span>${data.region}</p>
          <p class="country__row"><span>Capital:</span>${data.capital}</p>
          </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// Getting Data from Json file
const getCountries = async () => {
  try {
    const response = await fetch('./data.json');
    const datas = await response.json();

    // sorting the data alphabetically by country name
    arrangingAlphabetically(datas);

    // Displaying the data
    datas.forEach(data => {
      //
      displayCountries(data);
    });
  } catch (err) {
    console.error(err);
  }
};

const arrangingAlphabetically = datas => {
  datas.sort((a, b) => a.name.localeCompare(b.name));
};

getCountries();

// Event Listeners
themeSwitcher.addEventListener('click', changeThemeItems);
filterIcon.addEventListener('click', () => {
    filterDropdown.classList.toggle('hidden');
    filterIcon.classList.toggle('rotate180');
});
