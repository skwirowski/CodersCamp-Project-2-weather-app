/** @param code icon code according to API, eg. '10d' */
/** @param size icon size according to API, eg. '@2x' */
export default function getIconUrl(code, size = '') {
  return `http://openweathermap.org/img/wn/${code}${size}.png`;
}
