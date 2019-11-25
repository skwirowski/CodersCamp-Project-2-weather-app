/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
export default function search() {
  const cities = require('./static/pl.json');
  console.log(cities);
  const findMatches = (word, city) => {
    return city.filter(place => {
      const regex = new RegExp(word, 'gi');
      return place.city.match(regex);
    });
  };
  const searchInput = document.querySelector('.search');
  const suggestion = document.querySelector('.suggestions');
  function displayMatches(e) {
    e.preventDefault();
    console.log(this.value);
    const matchArray = findMatches(this.value, cities);
    console.log(matchArray);
    const html = matchArray
      .map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}</span>
            </li>
            `;
      })
      .join('');
    suggestion.innerHTML = html;
  }
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
}
