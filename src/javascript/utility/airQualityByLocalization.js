import { AqiId as id } from '../attributes/apiId';
import { AqiUrl as url } from '../attributes/apiUrl';

export default async function(lat, lon) {
  try {
    const apiFetch = await fetch(`${url}feed/${lat}/?token=${lon}${id}`);
    const apiJson = await apiFetch.json();
    return apiJson;
  } catch (error) {
    console.log(error);
  }
}
