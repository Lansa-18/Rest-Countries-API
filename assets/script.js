'use strict';
console.log('Hello Mr Lansa');

// Getting Html Elements
const countriesContainer = document.querySelector('.countries-grid-container');

// FUNCTIONS

// Getting Data from Json file
const getCountries = async () => {
  const response = await fetch('./data.json');
  const datas = await response.json();

  // sorting the data alphabetically by country name
  datas.sort((a,b) => a.name.localeCompare(b.name)) 

  // Displaying the data
  datas.forEach(data => {
    displayCountries(data);
  });
};

const displayCountries = data => {
  const html = `
    <article class="country">
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
};

const arrangingAlphabetically = () => {

}
getCountries();
