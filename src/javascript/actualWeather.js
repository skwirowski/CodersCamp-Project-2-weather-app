const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const createWeatherHTML = currentDay => {
  console.log(currentDay)
  const actualWeather = document.getElementById('actualWeather');
  actualWeather.innerHTML = /* html */ `<h2>${currentDay.name}<h2>
  <h2>${weekDays[new Date().getDay()]}, ${date()}</h2>
		<h2>Temperature: ${currentDay.main.temp}&deg;C</h2>
    <h2>Condition: ${currentDay.weather[0].description}</h2>
    <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">
    <h3>Pressure: ${currentDay.main.pressure}hPa</h3>
    <h3>Humidity: ${currentDay.main.humidity}%</h3>
    <h3>Wind: ${currentDay.wind.speed}m/s</h3>
    <h3>Sunrise: ${time(currentDay.sys.sunrise)}</h3>
    <h3>Sunset: ${time(currentDay.sys.sunset)}</h3>`;

};

const date = () => {
  const Today = new Date();
  const Month = Today.getMonth() + 1;
  const Day = Today.getDate();
  let Year = Today.getFullYear();
  if (Year <= 99) {
    Year += 1900;
  }
  return `${Day}-${Month}-${Year}`;
};

const time = unix => {
  const date = new Date(unix * 1000);
  const hours = `0${date.getHours()}`;
  const minutes = `0${date.getMinutes()}`;
  const formattedTime = `${hours.substr(-2)}:${minutes.substr(-2)}`;
  return formattedTime;
};

export default createWeatherHTML;
