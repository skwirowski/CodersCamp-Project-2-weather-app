import todayByName from './utility/todayByName';
import todayByLocalization from './utility/todayByLocalization';
import forecastByName from './utility/forecastByName';
import forecastByLocalization from './utility/forecastByLocalization';
import createWeatherHTML from './actualWeather';
import search from './searchCity';

import '../less/styles.less';

function getData(cityName) {
  //  Pogoda na dzisiaj po nazwie miasta
  todayByName(cityName).then(api => {
    createWeatherHTML(api);
    console.log(`Temperatura - ${api.main.temp}`);
  });

  //  Pogoda na dzisiaj po lokalizacji
  todayByLocalization(15, 53).then(api => console.log(`Temperatura dla ${api.name}  - ${api.main.temp}`));

  //  Pogoda na 5 dni po nazwie miasta
  forecastByName(cityName).then(api =>
    console.log(`Temperatura - ${api.list[0].main.temp} w dniu ${api.list[0].dt_txt}`)
  );

  //  Pogoda na 5 dni po lokalizacji
  forecastByLocalization(15, 53).then(api =>
    console.log(`Temperatura dla ${api.city.name} - ${api.list[0].main.temp} w dniu ${api.list[0].dt_txt}`)
  );
}

search(getData);
