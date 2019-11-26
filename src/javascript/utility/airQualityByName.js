const id = '49d149e6213feff8e7860aafa5c74ace81b9c630';
const url = 'https://api.waqi.info/';

export default async function(city) {
  try {
    const apiFetch = await fetch(`${url}feed/${city}/?token=${id}`);
    const apiJson = await apiFetch.json();
    return apiJson;
  } catch (error) {
    console.log(error);
  }
}
