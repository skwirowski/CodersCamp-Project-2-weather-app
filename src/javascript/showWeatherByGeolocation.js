import todayByLocalization from './utility/todayByLocalization';
import forecastByLocalization from './utility/forecastByLocalization';
import showCurrentWeatherData from './actualWeather';
import showNextHoursWeather from './nextHoursWeather';
import showNextDaysWeatherData from './nextDaysWeather';
import airQualityByLocalization from './utility/airQualityByLocalization';
import showAirQuality from './actualAirQuality';

export default function() {
  const geolocationBtn = document.querySelector('.geolocation-btn');

  function showWeatherByGeolocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    todayByLocalization(lat, lon).then(api => showCurrentWeatherData(api));
    airQualityByLocalization(lat, lon).then(api => showAirQuality(api));

    forecastByLocalization(lat, lon).then(api => {
      showNextHoursWeather(api);
      showNextDaysWeatherData(api.list);
    });
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showWeatherByGeolocation);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  geolocationBtn.addEventListener('click', getLocation);
}
