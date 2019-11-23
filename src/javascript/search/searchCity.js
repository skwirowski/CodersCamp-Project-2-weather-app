export default function search() {
    const cities = require('./pl.json');
    console.log(cities);

    const findMatches = (word, cities) => {
        return cities.filter(place => {
            const regex  = new RegExp(word, 'gi');
            return place.city.match(regex);
        })
    };
    const searchInput = document.querySelector('.search');
    const suggestion = document.querySelector('.suggestions');
    searchInput.addEventListener('change', displayMatches);
    function displayMatches () {
        console.log(this.value);
        const matchArray = findMatches(this.value, cities);
        console.log(matchArray);
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            return `
            <li>
                <span class="name">${cityName}</span>
            </li>
            `;
        }).join('');
    suggestion.innerHTML = html;
  };
}