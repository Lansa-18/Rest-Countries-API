'use strict';
console.log('Hello Mr Lansa');

// Getting Html Elements




// Getting Data from Json file
const getCountries = async () => {
    const response = await fetch('./data.json')
    const data = await response.json();

}

getCountries();