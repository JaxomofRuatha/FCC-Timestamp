document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('query-form').addEventListener('submit', e => {
    e.preventDefault();
    const currentUrl = location.href;
    window.location.href =
      currentUrl + document.getElementById('time-string').value;
  });
});
