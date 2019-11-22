// import externalFunction from './exampleScript';
// import { anotherExternalFunction } from './anotherExampleScript';
import '../less/styles.less';
import todayByName from './utility/todayByName';
import todayByLocalization from './utility/todayByLocalization';
import forecastByName from './utility/forecastByName';
import forecastByLocalization from './utility/forecastByLocalization';
import createWeatherHTML from './actualWeather/actualWeather';

// const something = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const funct = () => console.log('spread operator works', [...something]);

// const newFunction = async () => {
//   const someData = await fetch('https://randomuser.me/api/?results=2');
//   const resolvedData = await someData.json();
//   const readyData = resolvedData;
//   console.log('async await function works fine;', readyData.results);
// };

// funct();
// newFunction();
// externalFunction();
// console.log(anotherExternalFunction());

//  Pogoda na dzisiaj po nazwie miasta
todayByName('szczecin').then(api => {
  createWeatherHTML(api);
  console.log(`Temperatura - ${api.main.temp}`);
});

//  Pogoda na dzisiaj po lokalizacji
todayByLocalization(15, 53).then(api => console.log(`Temperatura dla ${api.name}  - ${api.main.temp}`));

//  Pogoda na 5 dni po nazwie miasta
forecastByName('szczecin').then(api =>
  console.log(`Temperatura - ${api.list[0].main.temp} w dniu ${api.list[0].dt_txt}`)
);

//  Pogoda na 5 dni po lokalizacji
forecastByLocalization(15, 53).then(api =>
  console.log(`Temperatura dla ${api.city.name} - ${api.list[0].main.temp} w dniu ${api.list[0].dt_txt}`)
);
