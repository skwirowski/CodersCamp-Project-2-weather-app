import '../less/styles.less';
import todayByName from './utility/todayByName';
import todayByLocalization from './utility/todayByLocalization';
import forecastByName from './utility/forecastByName';
import forecastByLocalization from './utility/forecastByLocalization';
import nextHoursWeather from './nextHoursWeather';

//  Pogoda na dzisiaj po nazwie miasta
todayByName('szczecin').then(api => {
  console.log(`Temperatura - ${api.main.temp}`);
});

//  Pogoda na dzisiaj po lokalizacji
todayByLocalization(15, 53).then(api => console.log(`Temperatura dla ${api.name}  - ${api.main.temp}`));

//  Pogoda na 5 dni po nazwie miasta
forecastByName('szczecin').then(api => {
  nextHoursWeather(api);
});

//  Pogoda na 5 dni po lokalizacji
forecastByLocalization(15, 53).then(api =>
  console.log(`Temperatura dla ${api.city.name} - ${api.list[0].main.temp} w dniu ${api.list[0].dt_txt}`)
);
