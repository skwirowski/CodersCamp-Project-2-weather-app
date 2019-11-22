export default async function getWeatherByName(api) {
  const container = document.querySelector('#nextHoursWeather');
  let htmlCode = '';
  for (let i = 0; i < 5; i++) {
    console.log(api.list[i]);
    htmlCode += /* html */ `
      <div style="border:1px solid black; background-color:grey; width:150px; display:inline-block;">
      <p>Time: ${api.list[i].dt_txt}</p>
      <p>Temperature: ${api.list[i].main.temp}&deg;C<p>
      <img src="https://openweathermap.org/img/wn/${api.list[i].weather[0].icon}@2x.png">
      </div>
      `;
  }
  container.innerHTML = htmlCode;
}
