const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetSection = document.getElementById("planets");

const renderPlanets = arr => {
    let planetStr = '';

    arr.forEach(planet => planetStr += `<p>${planet}<p>`);

    planetSection.innerHTML = planetStr;
};

renderPlanets(planets);
 
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalizedPlanets = planets.map(planet => planet[0].toUpperCase() + planet.slice(1));
console.log(capitalizedPlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanets = planets.filter(planet => planet.includes('e'));
console.log(ePlanets);