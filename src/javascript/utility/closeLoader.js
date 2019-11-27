export default function closeLoader() {
  const fetchLoaderRegion = document.querySelector('#data-fetch-loader-region');
  const fetchLoaderWrapper = document.querySelector('#data-fetch-loader-wrapper');

  fetchLoaderRegion.removeChild(fetchLoaderWrapper);
}
