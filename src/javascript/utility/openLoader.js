export default function openLoader() {
  const fetchLoaderRegion = document.querySelector('#data-fetch-loader-region');

  const spinnerTemplate = /* html */ `
  <div id='data-fetch-loader-wrapper' class='fetch-loader-wrapper'>
    <div class='fetch-loader'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  `;

  fetchLoaderRegion.innerHTML = spinnerTemplate;
}
