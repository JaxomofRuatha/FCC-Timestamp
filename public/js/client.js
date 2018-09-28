/* global document window */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('query-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const currentUrl = window.location.href;
    const inputTime = document.getElementById('time-string').value;

    const uri = encodeURIComponent(currentUrl + inputTime);

    window.location.href = uri;
  });
});
