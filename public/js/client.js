//Code for submit button

$(document).ready(() => {
    $("#query-form").submit((e) => {
        e.preventDefault();
        let currentUrl = location.href;
        window.location.href = currentUrl + $("#time-string").val(); 
    })
})