/* eslint-disable no-global-assign */
// import externalFunction from './exampleScript';
// import { anotherExternalFunction } from './anotherExampleScript';
import '../less/styles.less';
import todayByName from './utility/todayByName';
import todayByLocalization from './utility/todayByLocalization';
import forecastByName from './utility/forecastByName';
import forecastByLocalization from './utility/forecastByLocalization';
import createWeatherHTML from './actualWeather';
import search from './searchCity';
import clearDiv from './clearDiv';

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
search();
// After click button
const btnGetCity = document.querySelector('.submitCity');
btnGetCity.addEventListener('click', e => {
  e.preventDefault();
  clearDiv();
  const chooseCity = document.querySelector('.search').value;
  const addCity = document.getElementById('getCity');
  const addCityDiv = `
    <h1>
      <span class="name">Weather for ${chooseCity}</span>
    </h1>
  `;
  HTMLElement = document.createElement('div');
  HTMLElement.innerHTML = addCityDiv;
  addCity.appendChild(HTMLElement);

  //  Pogoda na dzisiaj po nazwie miasta
  todayByName(chooseCity).then(api => {
    createWeatherHTML(api);
    console.log(`Temperatura - ${api.main.temp}`);
  });

  //  Pogoda na dzisiaj po lokalizacji
  todayByLocalization(15, 53).then(api => console.log(`Temperatura dla ${api.name}  - ${api.main.temp}`));

  //  Pogoda na 5 dni po nazwie miasta
  forecastByName(chooseCity).then(api =>
    console.log(`Temperatura - ${api.list[0].main.temp} w dniu ${api.list[0].dt_txt}`)
  );

  //  Pogoda na 5 dni po lokalizacji
  forecastByLocalization(15, 53).then(api =>
    console.log(`Temperatura dla ${api.city.name} - ${api.list[0].main.temp} w dniu ${api.list[0].dt_txt}`)
  );
});
