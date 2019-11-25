import { daysNames } from './static/daysNames';
import { getDate, getTime } from './utility/datesHelperFunctions';
import getIconUrl from './attributes/getIconUrl';

const showCurrentWeatherData = currentDay => {
  const actualWeather = document.getElementById('actual-weather-container');
  const cityName = currentDay.name;
  const weekDay = daysNames[new Date().getDay()];
  const date = getDate();
  const icon = getIconUrl(currentDay.weather[0].icon, '@2x');
  const temperature = `${Math.round(currentDay.main.temp)}&deg;C`;
  const condition = currentDay.weather[0].description;
  const rainVolume = currentDay.weather.rain ? `${currentDay.weather.rain['3h']}mm` : '-';
  const windSpeed = `${currentDay.wind.speed}m/s`;
  const pressure = `${currentDay.main.pressure}hPa`;
  const humidity = `${currentDay.main.humidity}%`;
  const sunrise = `${getTime(currentDay.sys.sunrise)}`;
  const sunset = `${getTime(currentDay.sys.sunset)}`;
  actualWeather.innerHTML = /* html */ `
  <header>
    <h2>${cityName}<h2>
    <h3>${weekDay}, ${date}</h3>
  </header>
  <div class="actual-weather">
    <div class="main-weather-data data">
      <div class="icon">
        <img src="${icon}">
      </div>
      <div class="description">
        <p class = temperature>${temperature}</p>
        <p class = condition>${condition}</p>
      </div>
    </div>
    <div class="additional-weather-data data">
      <div id="rain" class="conditions">
        <p>${rainVolume}</p>
        <p>Rain</p>
      </div>
      <div id="wind" class="conditions">
        <p>${windSpeed}</p>
        <p>Wind</p>
      </div>
      <div id="pressure" class="conditions">
        <p>${pressure}</p>
        <p>Pressure</p>
      </div>
      <div id="humidity" class="conditions">
        <p>${humidity}</p>
        <p>Humidity</p>
      </div>
      <div id="sunrise" class="conditions">
        <p>${sunrise}</p>
        <p>Sunrise</p>
      </div>
      <div id="sunset" class="conditions">
        <p>${sunset}</p>
        <p>Sunset</p>
      </div>
    </div>
  </div>`;
};

export default showCurrentWeatherData;
