const moment = require('moment');

export default async function getWeatherByName(api) {
  const container = document.querySelector('#nextHoursWeather-container');
  let htmlCode = '';
  for (let i = 0; i < 5; i += 1) {
    htmlCode += /* html */ `
      <div class = 'nextHoursWeather-item'>
      <p>${moment(api.list[i].dt_txt).format('ha')}</p>
      <img src="https://openweathermap.org/img/wn/${api.list[i].weather[0].icon}@2x.png">      
      <p>${api.list[i].main.temp}&deg;C<p>
      </div>
      `;
  }
  container.innerHTML = htmlCode;
}
