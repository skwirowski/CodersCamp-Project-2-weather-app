const showAirQuality = currentDay => {
  const airQuality = document.getElementById('air-quality-container');
  // const cityName = currentDay.data.city.name;
  // eslint-disable-next-line prettier/prettier
  const {aqi} = currentDay.data;
  let color;
  let pollutionLevel;
  if (aqi > 0 && aqi <= 50) {
    color = 'green';
    pollutionLevel = 'Good';
  } else if (aqi > 51 && aqi <= 100) {
    color = 'yellow';
    pollutionLevel = 'Moderate';
  } else if (aqi > 101 && aqi <= 150) {
    color = 'orange';
    pollutionLevel = 'Unhealthy for Sensitive Groups';
  } else if (aqi > 151 && aqi <= 200) {
    color = 'red';
    pollutionLevel = 'Unhealthy';
  } else if (aqi > 201 && aqi <= 300) {
    color = 'violet'
    pollutionLevel = 'Very Unhealthy';
  } else if (aqi > 300) {
    color = 'purple';
    pollutionLevel = 'Hazardous';
  }
  if (aqi) {
    airQuality.innerHTML = /* html */ `
    <div class="air-quality">
      <p>Air Quality<p>
      <div id="aqi-quality" class=${color}>
        <p>${aqi}</p>
      </div>
      <p>${pollutionLevel}<p>
    </div>`;
  }
  // https://aqicn.org/data-platform/token/#/ - About the Air Quality Levels
};

export default showAirQuality;
