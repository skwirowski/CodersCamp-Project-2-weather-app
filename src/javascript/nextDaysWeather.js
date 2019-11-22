import { getDayOfWeek, getDayOfWeekShort, getDayOfMonth, getMonth } from './utility/datesHelperFunctions';

export default function showNextDaysWeatherData(weatherDataArray) {
  const nextDaysForecastRegion = document.querySelector('#next-days-forecast-region');

  const day = getDayOfWeek(weatherDataArray[0].dt);
  const dayShort = getDayOfWeekShort(weatherDataArray[0].dt);
  const dayOfMonth = getDayOfMonth(weatherDataArray[0].dt);
  const monthNumber = getMonth(weatherDataArray[0].dt);

  console.log('weatherData:', weatherDataArray);
  console.log('control log:', monthNumber);
}
