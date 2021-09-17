var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + Math.round(position.coords.latitude * Math.pow(10, 5)) / Math.pow(10, 5) +
    "<br>Longitude: "  + Math.round(position.coords.longitude * Math.pow(10, 5)) / Math.pow(10, 5);

}


