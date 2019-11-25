import todayByName from './utility/todayByName';
import forecastByName from './utility/forecastByName';
import createWeatherHTML from './actualWeather';
import search from './searchCity';
import showNextHoursWeather from './nextHoursWeather';
import showNextDaysWeatherData from './nextDaysWeather';
import getGeolocation from './showWeatherByGeolocation';

import '../less/styles.less';

function getData(cityName) {
  todayByName(cityName).then(api => createWeatherHTML(api));

  forecastByName(cityName).then(data => {
    showNextDaysWeatherData(data.list);
    showNextHoursWeather(data);
  });
}
search(getData);

getGeolocation();
