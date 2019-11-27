export default function saveToLocalStorage(name, data) {
  let message = '';

  try {
    localStorage.setItem(name, data);
    message = 'Local storage saving works fine';
  } catch (event) {
    message = 'Local storage saving is not working.';
  } finally {
    console.log(message);
  }
}
