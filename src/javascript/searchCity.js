/* eslint-disable global-require */
export default function search() {
  const cities = require('./static/pl.json');
  console.log(cities);
  const convertArray = cities.map(city => city.city);
  const allCities = cities.length;
  console.log(convertArray);
  console.log(allCities);
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
  searchInput.addEventListener('keyup', searchCity);
}
