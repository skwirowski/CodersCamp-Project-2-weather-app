import url from '../attributes/apiUrl';
import id from '../attributes/apiId';

export default async function(city) {
  try {
    const apiFetch = await fetch(`${url}weather?units=metric&q=${city}${id}`);
    const apiJson = await apiFetch.json();
    return apiJson;
  } catch (error) {
    console.log(error);
  }
}
