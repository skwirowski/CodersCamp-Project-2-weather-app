const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const createWeatherHTML = currentDay => {
  console.log(currentDay);
  const actualWeather = document.getElementById('actualWeather');
  actualWeather.innerHTML = /*html */ `<h2>${weekDays[new Date().getDay()]}</h2>
		<h2>Temperature: ${currentDay.main.temp}&deg;C</h2>
		<h2>Condition: ${currentDay.weather[0].description}</h2>
    <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
  // document.body.appendChild(newDiv);
};

export default createWeatherHTML;
