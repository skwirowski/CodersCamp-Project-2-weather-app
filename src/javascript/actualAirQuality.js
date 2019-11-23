const createAirQualityHTML = currentDay => {
  console.log(currentDay);
  const airQuality = document.getElementById('airQuality');
  airQuality.innerHTML = /* html */ `
    <p>${currentDay.data.city.name}<p>
    <p>Air Quality Index: ${currentDay.data.aqi}</p>`;
  // https://aqicn.org/data-platform/token/#/ - About the Air Quality Levels
};

export default createAirQualityHTML;
