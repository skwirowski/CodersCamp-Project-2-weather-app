export default function(callback) {
  const geolocationBtn = document.querySelector('.geolocation-btn');

  function showWeatherByGeolocation(position) {
    const { latitude: lat, longitude: lon } = position.coords;

    callback(lat, lon);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showWeatherByGeolocation);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  geolocationBtn.addEventListener('click', getLocation);
}
