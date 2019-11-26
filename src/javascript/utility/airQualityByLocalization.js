import { AqiId as id } from '../attributes/apiId';
import { AqiUrl as url } from '../attributes/apiUrl';

// eslint-disable-next-line consistent-return
export default async function(lat, lon) {
  try {
    const apiFetch = await fetch(`${url}feed/${lat}/?token=${lon}${id}`);
    const apiJson = await apiFetch.json();
    return apiJson;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
