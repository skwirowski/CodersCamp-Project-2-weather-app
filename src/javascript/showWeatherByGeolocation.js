import saveToLocalStorage from './utility/saveToLocalStorage';
import loadFromLocalStorage from './utility/loadFromLocalStorage';

export default function(callback) {
  const geolocationBtn = document.querySelector('.geolocation-btn');
  const setDefaultLocationCheckbox = document.querySelector('#save-location-as-default-checkbox');
  const cityDescription = document.getElementById('getCity');
  const localStorageDataName = 'userDefaultCoordinates';
  const localStorageData = loadFromLocalStorage(localStorageDataName);

  function checkForDefaultCoordinatesInLocalStorage() {
    if (localStorageData) {
      const { lat, lon } = localStorageData;
      callback(lat, lon);
    }
  }
  checkForDefaultCoordinatesInLocalStorage();

  function showWeatherByGeolocation(position) {
    const { latitude: lat, longitude: lon } = position.coords;

    callback(lat, lon);

    function saveDefaultCoordinatesToLocalStorage() {
      if (setDefaultLocationCheckbox.checked) {
        saveToLocalStorage(localStorageDataName, { lat, lon });
      }
    }
    saveDefaultCoordinatesToLocalStorage();
  }

  function getLocation() {
    function clearDiv() {
      const clearAll = cityDescription;
      clearAll.innerHTML = '';
    }
    clearDiv();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showWeatherByGeolocation);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  geolocationBtn.addEventListener('click', getLocation);
}
