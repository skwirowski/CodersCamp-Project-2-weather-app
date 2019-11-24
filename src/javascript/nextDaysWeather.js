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

  const nextDaysWeatherTemplate = /* html */ `
    <div class='next-days-weather'>
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
          const temperature = `${roundFloatToInteger(temp)}&#8451;`;
          const rainVolume = weather.rain ? `${weather.rain['3h']}mm` : '-';

          return /* html */ `
          <span>${dayOfWeek}</span>
          <span>${dayOfMonth}/${month}</span>
          <img src=${iconUrl} alt='weather icon'>
          <span>Temperature: ${temperature}</span>
          <span>Wind: ${speed}m/s</span>
          <span>Rain: ${rainVolume}</span>
        `;
        })
        .join('')}
    </div>
  `;

  nextDaysForecastRegion.innerHTML = nextDaysWeatherTemplate;
}
