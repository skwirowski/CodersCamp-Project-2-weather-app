import { daysNames } from './static/daysNames';
import { getDate, getTime } from './utility/datesHelperFunctions';
import getIconUrl from './attributes/getIconUrl'

const showCurrentWeatherData = currentDay => {
  const actualWeather = document.getElementById('actualWeather');
  const cityName = currentDay.name;
  const weekDay = daysNames[new Date().getDay()];
  const date = getDate();
  const icon = getIconUrl(currentDay.weather[0].icon, '@2x');
  const temperature = `${currentDay.main.temp}&deg;C`;
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
  <div>
    <img src="${icon}">
		<p>${temperature}</p>
    <p>${condition}</p>
  </div>
  <div>
    <div>
      <p>${rainVolume}</p>
      <p>Rain</p>
    </div>
    <div>
      <p>${windSpeed}</p>
      <p>Wind</p>
    </div>
    <div>
      <p>${pressure}</p>
      <p>Pressure</p>
    </div>
    <div>
      <p>${humidity}</p>
      <p>Humidity</p>
    </div>
    <div>
      <p>${sunrise}</p>
      <p>Sunrise</p>
    </div>
    <div>
      <p>${sunset}</p>
      <p>Sunset</p>
    </div>
  </div>`;
};

export default showCurrentWeatherData;