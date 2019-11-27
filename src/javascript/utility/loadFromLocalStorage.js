export default function loadFromLocalStorage(name) {
  const localStorageData = localStorage.getItem(name);

  if (localStorageData) {
    return JSON.parse(localStorageData).data;
  }
  return undefined;
}
