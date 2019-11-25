/* eslint-disable global-require */
export default function search(callback) {
  const cities = require('./static/pl.json');
  const convertArray = cities.map(city => city.city);
  const allCities = cities.length;
  console.log(convertArray);
  const searchInput = document.querySelector('.search');

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
  const btnGetCity = document.querySelector('.submitCity');
  btnGetCity.addEventListener('click', e => {
    e.preventDefault();
    const cityDescription = document.getElementById('getCity');

    function clearDiv() {
      const clearAll = cityDescription;
      clearAll.innerHTML = '';
    }
    clearDiv();

    const chooseCity = searchInput.value;
    const addCityDiv = `
    <h1>
      <span class="name">Weather for ${chooseCity}</span>
    </h1>
  `;
    const headingContent = document.createElement('div');
    headingContent.innerHTML = addCityDiv;
    cityDescription.appendChild(headingContent);

    callback(chooseCity);
  });

  searchInput.addEventListener('keyup', searchCity);
}
