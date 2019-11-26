import { AqiId as id } from '../attributes/apiId';
import { AqiUrl as url } from '../attributes/apiUrl';

// eslint-disable-next-line consistent-return
export default async function(city) {
  try {
    const apiFetch = await fetch(`${url}feed/${city}/?token=${id}`);
    const apiJson = await apiFetch.json();
    return apiJson;
  } catch (error) {
    console.log(error);
  }
}
