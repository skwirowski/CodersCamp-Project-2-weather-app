/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

// import * as cities from './static/pl.json'; // it doesn't work

// export default function search() {
//   const cities = require('./static/pl.json');
//   console.log(cities);
//   const findMatches = (word, city) => {
//     return city.filter(place => {
//       const regex = new RegExp(word, 'gi');
//       return place.city.match(regex);
//     });
//   };
//   const searchInput = document.querySelector('.search');
//   const suggestion = document.querySelector('.suggestions');
//   function displayMatches(e) {
//     e.preventDefault();
//     console.log(this.value);
//     document.getElementById('datalist').innerHTML = '';
//     const matchArray = findMatches(this.value, cities);
//     console.log(matchArray);
//     const html = matchArray
//       .map(place => {
//         const regex = new RegExp(this.value, 'gi');
//         const cityName = place.city.replace(regex, `<option>${this.value}</option>`);
//         return `
//             <option>
//                 ${cityName}
//             </option>
//             `;
//       })
//       .join('');
//     suggestion.innerHTML = html;
//   }
//   searchInput.addEventListener('keyup', displayMatches);
// }

export default function search() {
  const cities = require('./static/pl.json');
  console.log(cities);
  const allCities = Array.from(cities).length;
  const searchInput = document.querySelector('.search');
  function searchCity(value) {
    document.getElementById('datalist').innerHTML = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < allCities; i++) {
      if (cities[i].toLowerCase().indexOf(value.toLowerCase()) > -1) {
        const node = document.createElement('option');
        const val = document.createTextNode(cities[i]);
        node.appendChild(val);
        document.getElementById('datalist').appendChild(node);
      }
    }
  }
  searchInput.addEventListener('keyup', searchCity);
}