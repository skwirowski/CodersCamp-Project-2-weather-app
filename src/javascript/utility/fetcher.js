import url from '../attributes/apiUrl';
import id from '../attributes/apiId';

export default async function(request) {
  try {
    const apiFetch = await fetch(`${url}${request}${id}`);
    const apiJson = await apiFetch.json();
    return apiJson;
  } catch (error) {
    console.log(error);
  }
}
