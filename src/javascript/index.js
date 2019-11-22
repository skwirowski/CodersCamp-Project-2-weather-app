import showNextDaysWeatherData from './nextDaysWeather';

import apiUrl from './static/api';
import apiKey from './static/config';
import '../less/styles.less';

const fetchNextDaysWeatherData = async () => {
  try {
    const exampleCity = 'Szczecin';
    const apiRequest = await fetch(`${apiUrl}forecast?q=${exampleCity}&units=metric&appid=${apiKey}`);
    const nextDaysWeatherData = await apiRequest.json();

    console.log(nextDaysWeatherData);
  } catch (error) {
    console.log(error);
  }
};

fetchNextDaysWeatherData();
showNextDaysWeatherData();
