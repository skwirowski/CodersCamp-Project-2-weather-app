import url from '../attributes/apiUrl';
import id from '../attributes/apiId';

export default async function(lat, lon) {
  try {
    const apiFetch = await fetch(`${url}forecast?units=metric&lat=${lat}&lon=${lon}${id}`);
    const apiJson = await apiFetch.json();
    return apiJson;
  } catch (error) {
    console.log(error);
  }
}
