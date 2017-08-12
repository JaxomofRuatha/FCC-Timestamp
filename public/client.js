//Code for submit button

$(() => {
    $("submit").click(() => {
        //let currentUrl = location;
        //window.location = location + $("#time-string").val(); 
        console.log($("#time-string").val());
        location.search = $("#time-string").val();
    })
})