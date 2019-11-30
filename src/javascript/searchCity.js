/* eslint-disable global-require */
// import saveToLocalStorage from './utility/saveToLocalStorage';
import loadFromLocalStorage from './utility/loadFromLocalStorage';

export default function search(callback) {
  const cities = require('./static/pl.json');
  const allCities = cities.length;

  const convertArray = cities.map(city => city.city);
  const searchInput = document.querySelector('.search');
  const btnGetCity = document.querySelector('.submitCity');
  const cityDescription = document.getElementById('getCity');
  const setDefaultLocationCheckbox = document.querySelector('#save-location-as-default-checkbox');

  const localStorageDataName = 'userDefaultLocation';
  const localStorageData = loadFromLocalStorage(localStorageDataName);

  function checkForDefaultLocationInLocalStorage() {
    if (localStorageData) {
      callback(localStorageData);
    }
  }
  checkForDefaultLocationInLocalStorage();

  function searchCity(event) {
    document.getElementById('datalist').innerHTML = '';
    for (let i = 0; i < allCities; i += 1) {
      if (convertArray[i].toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
        const node = document.createElement('option');
        const val = document.createTextNode(convertArray[i]);
        node.appendChild(val);
        document.getElementById('datalist').appendChild(node);
      }
    }
  }

  // After click button
  btnGetCity.addEventListener('click', e => {
    e.preventDefault();

    function clearDiv() {
      const clearAll = cityDescription;
      clearAll.innerHTML = '';
    }
    clearDiv();
    const chooseCity = searchInput.value;
    if (chooseCity === '' || chooseCity === undefined) {
      const addCityValidate = `
        <h1>
          <span class="name">Wybierz miasto z listy, pole nie moze byc puste.</span>
        </h1>
       `;
      const textContent = document.createElement('div');
      textContent.innerHTML = addCityValidate;
      cityDescription.appendChild(textContent);
    } else {
      const addCityDiv = `
    <h1>
      <span class="name">Weather for ${chooseCity}</span>
    </h1>
  `;
      const headingContent = document.createElement('div');
      headingContent.innerHTML = addCityDiv;
      cityDescription.appendChild(headingContent);

      callback(chooseCity);
    }

    function saveDefaultLocationToLocalStorage() {
      if (setDefaultLocationCheckbox.checked) {
        saveToLocalStorage(localStorageDataName, chooseCity);
      }
    }
    saveDefaultLocationToLocalStorage();
  });

  searchInput.addEventListener('keyup', searchCity);
}
