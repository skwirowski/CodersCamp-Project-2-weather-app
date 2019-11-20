import externalFunction from './externalScript';
import { anotherExternalFunction } from './anotherExternalScript';

const something = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
