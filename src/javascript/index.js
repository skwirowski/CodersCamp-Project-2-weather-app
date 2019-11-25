import todayByName from './utility/todayByName';
import forecastByName from './utility/forecastByName';
import airQualityByName from './utility/airQualityByName';
import showCurrentWeatherData from './actualWeather';
import search from './searchCity';
import showNextHoursWeather from './nextHoursWeather';
import createAirQualityHTML from './actualAirQuality';
import showNextDaysWeatherData from './nextDaysWeather';
import getGeolocation from './showWeatherByGeolocation';

import '../less/styles.less';

function getData(cityName) {
  todayByName(cityName).then(api => showCurrentWeatherData(api));

  forecastByName(cityName).then(data => {
    showNextDaysWeatherData(data.list);
    showNextHoursWeather(data);
  });

  airQualityByName(cityName).then(api => createAirQualityHTML(api));
}
search(getData);

getGeolocation();
