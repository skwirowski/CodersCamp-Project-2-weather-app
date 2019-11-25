import todayByName from './utility/todayByName';
import todayByLocalization from './utility/todayByLocalization';
import forecastByName from './utility/forecastByName';
import forecastByLocalization from './utility/forecastByLocalization';
import airQualityByName from './utility/airQualityByName';
import createWeatherHTML from './actualWeather';
import nextHoursWeather from './nextHoursWeather';
import createAirQualityHTML from './actualAirQuality';
import showNextDaysWeatherData from './nextDaysWeather';

import '../less/styles.less';

//  Pogoda na dzisiaj po nazwie miasta
todayByName('szczecin').then(api => createWeatherHTML(api));

//  Pogoda na dzisiaj po lokalizacji
todayByLocalization(15, 53).then(api => createWeatherHTML(api));

//  Pogoda na 5 dni po nazwie miasta
forecastByName('szczecin').then(api => {
  nextHoursWeather(api);
});

//  Pogoda na 5 dni po lokalizacji
forecastByLocalization(15, 53).then(api =>
  console.log(`Temperatura dla ${api.city.name} - ${api.list[0].main.temp} w dniu ${api.list[0].dt_txt}`)
);

airQualityByName('szczecin').then(api => createAirQualityHTML(api));

forecastByName('Szczecin').then(data => showNextDaysWeatherData(data.list));
