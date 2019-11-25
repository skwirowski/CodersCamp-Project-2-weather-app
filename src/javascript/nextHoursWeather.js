import getIconUrl from './attributes/getIconUrl';

const moment = require('moment');

export default function(api) {
  const container = document.querySelector('#next-hours-weather-container');
  let htmlCode = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    htmlCode += /* html */ `
      <div class = 'next-hours-weather-item'>
      <span class="next-hours-weather-time next-hours-weather-atr">${moment(api.list[i].dt_txt).format('ha')}</span>
      <img class="next-hours-weather-img next-hours-weather-atr" src="${getIconUrl(
        api.list[i].weather[0].icon,
        '@2x'
      )}">     
      <span class="next-hours-weather-temp next-hours-weather-atr">${Math.round(api.list[i].main.temp)}&deg;C<span>
      </div>
      `;
  }
  container.innerHTML = `<h2 class='next-hours-weather-h'>Todays weather</h2>
  <div class='next-hours-weather-container'> ${htmlCode} </div>`;
}
