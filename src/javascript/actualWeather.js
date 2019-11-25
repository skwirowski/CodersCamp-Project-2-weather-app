import { daysNames as weekDays } from './static/daysNames';
import { getDate as date, getTime as time } from './utility/datesHelperFunctions';
// const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const createWeatherHTML = currentDay => {
  const actualWeather = document.getElementById('actualWeather');
  actualWeather.innerHTML = /* html */ `
    <h3>${currentDay.name}<h3>
    <h3>${weekDays[new Date().getDay()]}, ${date()}</h3>
		<p>Temperature: ${currentDay.main.temp}&deg;C</p>
    <p>Condition: ${currentDay.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">
    <p>Pressure: ${currentDay.main.pressure}hPa</p>
    <p>Humidity: ${currentDay.main.humidity}%</p>
    <p>Wind: ${currentDay.wind.speed}m/s</p>
    <p>Sunrise: ${time(currentDay.sys.sunrise)}</p>
    <p>Sunset: ${time(currentDay.sys.sunset)}</p>`;
};

export default createWeatherHTML;
