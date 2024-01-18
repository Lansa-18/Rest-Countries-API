'use strict';
console.log('Hello Mr Lansa');

// Getting Html Elements
const body = document.querySelector('body');
const header = document.querySelector('header');
const input = document.querySelector('.enquiries-input')
const inputField = document.querySelector('.enquiries-input-field');
const filter = document.querySelector('.enquiries-filter');
const filterDropdown = document.querySelector('.filter-dropdown');
const countriesContainer = document.querySelector('.countries-grid-container');
const themeSwitcher = document.querySelector('.div-right');
const themeSwitcherDark = document.querySelector('.theme-icon-dark');


// FUNCTIONS
const displayCountries = (data, className = 'dark-mode') => {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <p class="country__row"><span>Population:</span>${data.population}</p>
        <p class="country__row"><span>Region:</span>${data.region}</p>
        <p class="country__row"><span>Capital:</span>${data.capital}</p>
        </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);

//   const country = document.querySelector('.country');
//   console.log(country);
};

const changeThemeItems = () => {
    // changeGlobalTheme();
    // if () {
        
    // }
};

const changeGlobalTheme = () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
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


}

const arrangingAlphabetically = datas => {
  datas.sort((a, b) => a.name.localeCompare(b.name));
};

// Getting Data from Json file
const getCountries = async () => {
  const response = await fetch('./data.json');
  const datas = await response.json();

  // sorting the data alphabetically by country name
  arrangingAlphabetically(datas);

  // Displaying the data
  datas.forEach(data => {
    // 
    displayCountries(data);
  });
};

getCountries();

// Event Listeners
themeSwitcher.addEventListener('click', changeThemeItems);