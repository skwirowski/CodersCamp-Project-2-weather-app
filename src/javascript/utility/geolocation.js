import todayByLocalization from './todayByLocalization';
import forecastByLocalization from './forecastByLocalization';
import createWeatherHTML from '../actualWeather';
import showNextHoursWeather from '../nextHoursWeather';
import showNextDaysWeatherData from '../nextDaysWeather';

function showWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  todayByLocalization(lat, lon).then(api => createWeatherHTML(api));

  forecastByLocalization(lat, lon).then(api => {
    showNextHoursWeather(api);
    showNextDaysWeatherData(api.list);
  });
}

export default function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}
