import externalFunction from './exampleScript';
import { anotherExternalFunction } from './anotherExampleScript';
import '../less/styles.less';
import fetcher from './utility/fetcher';

const something = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const funct = () => console.log('spread operator works', [...something]);

const newFunction = async () => {
  const someData = await fetch('https://randomuser.me/api/?results=2');
  const resolvedData = await someData.json();
  const readyData = resolvedData;
  console.log('async await function works fine;', readyData.results);
};

funct();
newFunction();
externalFunction();
console.log(anotherExternalFunction());

//  Zapytanie do api po nazwie miasta
fetcher('q=szczecin').then(api => console.log(`Temperatura - ${api.main.temp}`));

//  Zapytanie do api po lokalizacji
fetcher('lat=53.43&lon=14.55').then(api => console.log(`Temperatura dla ${api.name} - ${api.main.temp}`));
