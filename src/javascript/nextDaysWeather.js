import { getDayOfWeek, getDayOfWeekShort, getDayOfMonth, getMonth } from './utility/datesHelperFunctions';
import {
  createWeatherDataArrayThatStartsFromTomorrow,
  getEveryNthArrayElement,
  roundFloatToInteger,
} from './utility/responseDataHelperFunctions';
import getIconUrl from './attributes/getIconUrl';

export default function showNextDaysWeatherData(weatherDataArray) {
  const nextDaysForecastRegion = document.querySelector('#next-days-forecast-region');

  const weatherDataStartingFromTomorrow = createWeatherDataArrayThatStartsFromTomorrow(weatherDataArray, 'dt');
  const weatherDataAtNoon = getEveryNthArrayElement(weatherDataStartingFromTomorrow, 4, 8);
  const forecastDaysQuantity = weatherDataAtNoon.length;

  const nextDaysWeatherTemplate = /* html */ `
    <div class='next-days-weather'>
      <h2 class='next-days-weather__heading'>Next ${forecastDaysQuantity} days</h2>
      ${weatherDataAtNoon
        .map(weather => {
          const { dt } = weather;
          const { icon } = weather.weather[0];
          const { temp } = weather.main;
          const { speed } = weather.wind;

          const dayOfWeek = getDayOfWeek(dt);
          const dayOfMonth = getDayOfMonth(dt);
          const month = getMonth(dt);
          const iconUrl = getIconUrl(icon, '@2x');
          const temperature = `${roundFloatToInteger(temp)}&#176;C`;
          const rainVolume = weather.rain ? `${weather.rain['3h']}mm` : '-';

          return /* html */ `
            <div class='weather-row'>
              <div class='weather-row__item'>
                <span class='weather-row__item--value'>${dayOfWeek}</span>
                <span class='weather-row__item--description'>${dayOfMonth}/${month}</span>
              </div>
              <img
                class='weather-row__icon'
                src=${iconUrl}
                alt='weather icon'
              >
              <div class='weather-row__item'>
                <span class='weather-row__item--value'>${temperature}</span>
                <span class='weather-row__item--description'>Temp</span>
              </div>
              <div class='weather-row__item'>
                <span class='weather-row__item--value'>${speed}m/s</span>
                <span class='weather-row__item--description'>Wind</span>
              </div>
              <div class='weather-row__item'>
                <span class='weather-row__item--value'>${rainVolume}</span>
                <span class='weather-row__item--description'>Rain</span>
              </div>
            </div>
          `;
        })
        .join('')}
    </div>
  `;

  nextDaysForecastRegion.innerHTML = nextDaysWeatherTemplate;
}
