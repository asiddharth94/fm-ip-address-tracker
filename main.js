var myMap = L.map('mapid', {zoomControl: false}).setView([51.505, -0.09], 13);
var mapMarker = L.icon({
    iconUrl: './images/icon-location.svg'
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWJoaXNoZWtzaWQ5NCIsImEiOiJja2VoYjljMW8wcXc1MnVscGhnZDFqc3pkIn0.PGo0AU-8wSCy-_1aZWU_Ag'
}).addTo(myMap);

L.marker([51.5, -0.09], {icon: mapMarker}).addTo(myMap);