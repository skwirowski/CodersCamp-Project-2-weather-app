import { getDayOfMonth } from './datesHelperFunctions';

/** @param array Array of weather data objects */
/** @param objectKey Object key to compare with today value */
export function createWeatherDataArrayThatStartsFromTomorrow(array, objectKey) {
  const today = new Date().getDate();
  const isDateTomorrow = date => getDayOfMonth(date[objectKey]) > today;
  const firstTomorrowElement = array.findIndex(isDateTomorrow);

  const weatherDataFromTomorrow = array.slice(firstTomorrowElement);

  return weatherDataFromTomorrow;
}

/** @param array Array of weather data objects */
/** @param start Index to start iteration from */
/** @param step Index incrementation value step */
/** Function creates array from every nth element */
export function getEveryNthArrayElement(array, start, step) {
  const filteredArray = [];

  for (let i = start; i < array.length; i += step) {
    filteredArray.push(array[i]);
  }

  return filteredArray;
}

export function roundFloatToInteger(number) {
  return Math.round(number);
}
