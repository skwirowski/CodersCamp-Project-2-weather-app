import externalFunction from './script';

const something = [1, 2, 3, 4, 5];

const funct = () => console.log('it works', [...something]);

const newFunction = async () => {
  try {
    const someData = await setTimeout(() => {
      return 10;
    }, 1000);
    console.log(someData);
  } catch (error) {
    console.log(error);
  }
}

funct();
newFunction();
externalFunction();