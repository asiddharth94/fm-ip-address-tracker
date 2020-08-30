var searchText = document.querySelector('.search-box > input');
var searchIcon = document.querySelector('.search-icon');

var ipAddress = document.querySelector('.ip-address');
var loc = document.querySelector('.location');
var timezone = document.querySelector('.timezone');
var isp = document.querySelector('.isp');

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

searchIcon.addEventListener('click', function(event) {
    var searchValue = searchText.value;
    var result = fetch(`https://geo.ipify.org/api/v1?apiKey=at_DuE1mQRJGaRuY1kbYgW6ggKTBGMDw&ipAddress=${searchValue}`);
    
    result.then(response => {
        return response.json();
    }).then(data => {
        var ipAddressRes = `${data.ip}`;
        var locationRes = `${data.location.region}, ${data.location.country} ${data.location.postalCode}`;
        var timeZoneRes = `UTC ${data.location.timezone}`;
        var ispRes = `${data.isp}`;
        var latitudeRes = `${data.location.lat}`;
        var longitudeRes = `${data.location.lng}`;
        ipAddress.innerHTML = ipAddressRes;
        loc.innerHTML = locationRes;
        timezone.innerHTML = timeZoneRes;
        isp.innerHTML = ispRes;
        myMap.panTo(new L.LatLng(latitudeRes, longitudeRes));
        L.marker([latitudeRes, longitudeRes], {icon: mapMarker}).addTo(myMap);
    });
});

