const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const createWeatherHTML = currentDay => {
  const actualWeather = document.getElementById('actualWeather');
  actualWeather.innerHTML = /* html */ `
    <h3>${currentDay.name}<h3>
    <h3>${weekDays[new Date().getDay()]}, ${date()}</h3>
		<p>Temperature: ${currentDay.main.temp}&deg;C</p>
    <p>Condition: ${currentDay.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">
    <p>Pressure: ${currentDay.main.pressure}hPa</p>
    <p>Humidity: ${currentDay.main.humidity}%</p>
    <p>Wind: ${currentDay.wind.speed}m/s</p>
    <p>Sunrise: ${time(currentDay.sys.sunrise)}</p>
    <p>Sunset: ${time(currentDay.sys.sunset)}</p>`;
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
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const newformat = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedTime = `${hours}:${minutes}${newformat}`;
  return formattedTime;
};

export default createWeatherHTML;
