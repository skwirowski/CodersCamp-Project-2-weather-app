export default function saveToLocalStorage(name, data) {
  let message = '';

  try {
    const dataToObject = { data };
    const userDataString = JSON.stringify(dataToObject);

    localStorage.clear();
    localStorage.setItem(name, userDataString);
    message = 'Local storage saving works fine';
  } catch (event) {
    message = 'Local storage saving is not working. ¯|_(ツ)_/¯';
  } finally {
    console.log(message);
  }
}
