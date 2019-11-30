import todayByName from './utility/todayByName';
import forecastByName from './utility/forecastByName';
import airQualityByName from './utility/airQualityByName';
import airQualityByLocalization from './utility/airQualityByLocalization';
import showCurrentWeatherData from './actualWeather';
import search from './searchCity';
import showNextHoursWeather from './nextHoursWeather';
import createAirQualityHTML from './actualAirQuality';
import showNextDaysWeatherData from './nextDaysWeather';
import getGeolocation from './showWeatherByGeolocation';
import todayByLocalization from './utility/todayByLocalization';
import forecastByLocalization from './utility/forecastByLocalization';
import openLoader from './utility/openLoader';
import closeLoader from './utility/closeLoader';

import '../less/styles.less';

function getDataByName(cityName) {
  // openLoader();

  Promise.all([todayByName(cityName), forecastByName(cityName), airQualityByName(cityName)])
    .then(response => {
      showCurrentWeatherData(response[0]);
      showNextDaysWeatherData(response[1].list);
      showNextHoursWeather(response[1]);
      createAirQualityHTML(response[2]);

      // closeLoader();
    })
    .catch(error => console.log(error));
}
function getDataByLocation(lat, lon) {
  // openLoader();

  Promise.all([todayByLocalization(lat, lon), forecastByLocalization(lat, lon), airQualityByLocalization(lat, lon)])
    .then(response => {
      showCurrentWeatherData(response[0]);
      showNextHoursWeather(response[1]);
      showNextDaysWeatherData(response[1].list);
      createAirQualityHTML(response[2]);

      // closeLoader();
    })
    .catch(error => console.log(error));
}

search(getDataByName);
getGeolocation(getDataByLocation);
