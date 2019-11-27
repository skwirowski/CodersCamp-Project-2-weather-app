import todayByName from './utility/todayByName';
import forecastByName from './utility/forecastByName';
import airQualityByName from './utility/airQualityByName';
import showCurrentWeatherData from './actualWeather';
import search from './searchCity';
import showNextHoursWeather from './nextHoursWeather';
import showAirQuality from './actualAirQuality';
import showNextDaysWeatherData from './nextDaysWeather';
import getGeolocation from './showWeatherByGeolocation';

import '../less/styles.less';

function getData(cityName) {
  forecastByName(cityName).then(data => {
    showNextDaysWeatherData(data.list);
    showNextHoursWeather(data);
  });
  todayByName(cityName).then(api => showCurrentWeatherData(api));
  airQualityByName(cityName).then(api => showAirQuality(api));
}

search(getData);
getGeolocation();
