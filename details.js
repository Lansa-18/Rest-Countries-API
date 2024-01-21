'use strict';

// Getting html elements
const header = document.querySelector('header');
const themeSwitcher = document.querySelector('.div-right');
const themeIcon = themeSwitcher.querySelector('use');
const detailsBody = document.querySelector('body');
const detailsContainer = document.querySelector('.details__container');

// GLOBAL VARIABLES
let currentTheme = 'dark-mode';

// Retrieve the country data from sessionStorage
const countryData = JSON.parse(localStorage.getItem('countryData'));
console.log(countryData);

const borderCountries = countryData.borders;
console.log(borderCountries);

const displayCountriesDetails = data => {
  const html = `
    <section class="details-section">
    <div class="back__button dark-mode">
            <svg class="back-arrow-dark">
              <use
                xlink:href="./assets/images/back-icon-dark.svg#back-icon-dark"
                ></use>
            </svg>
            Back
          </div>
        </section>
        
        <section class="data__section">
            <div class="data__section--img">
                <img src="${data.flag}" alt="" />
            </div>
            <div class="data__section--content dark-mode-text">
                <p class="data__section--content-p">${data.name}</p>
                <div class="content__details">
                    <div class="content__details--rows1">
                        <p class=""><span>Native Name:</span> ${
                          data.nativeName
                        }</p>
                        <p class=""><span>Population:</span> ${
                          data.population
                        }</p>
                        <p class=""><span>Region:</span> ${data.region}</p>
                        <p class=""><span>Sub Region:</span> ${
                          data.subregion
                        }</p>
                        <p class=""><span>Capital:</span> ${data.capital ? data.capital : `No Capital for ${data.name}`}</p>
                    </div>
                    <div class="content__details--rows2">
                        <p class=""><span>Top Level Domain:</span> ${
                          data.topLevelDomain
                        }</p>
                        <p class=""><span>Currencies:</span> ${
                          data.currencies
                            ? data.currencies
                                .map(currency => currency.name)
                                .join(', ')
                            : `No Currency for ${data.name}`
                        }</p>
                        <p class=""><span>Languages:</span> ${
                          data.languages
                            ? data.languages
                                .map(language => language.name)
                                .join(', ')
                            : `No Language for ${data.name}`
                        }</p>
                    </div>
                </div>
                <div class="content__border">
                    <p>Border Countries:</p>
                    <div class="border__countries">
                        ${
                          data.borders
                            ? data.borders
                                ?.map(
                                  border =>
                                    `<div class="border__countries--item dark-mode">${border}</div>`
                                )
                                .join('')
                            : `No Border Countries for ${data.name}`
                        }
                    </div>
                </div>
            </div>
        </section>
    `;
  detailsContainer.insertAdjacentHTML('beforeend', html);
};

{
  /* <div class="border__countries--item dark-mode">France</div>
<div class="border__countries--item dark-mode">Germany</div>
<div class="border__countries--item dark-mode">Netherlands</div> */
}
// Call displayCountriesDetails with the retrieved data
displayCountriesDetails(countryData);

// const borderCountriesContainer = document.querySelector('.border__countries');

// // Clear the border countries container
// borderCountriesContainer.innerHTML = '';

// // Loop through the border countries array
// borderCountries.forEach(borderCountry => {
//     // Create a new .border__countries--item element
//     const item = document.createElement('div');
//     item.classList.add('border__countries--item, dark-mode');
//     item.textContent = borderCountry;

//     // Add the item to the border countries container
//     borderCountriesContainer.appendChild(item);
// })

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

const detailsBackBtn = document.querySelector('.back__button');
const detailsBackBtnSvg = detailsBackBtn.querySelector('use');
const dataDetails = document.querySelector('.data__section--content');
const allBorderCountries = document.querySelectorAll(
  '.border__countries--item'
);

// EVENT LISTENERS
themeSwitcher.addEventListener('click', changeThemeItems);
