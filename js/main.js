//function to start the Leaflet map
function createMap() {

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>';
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoidGFyYXNrYWR1ayIsImEiOiJjam5ua3NzN3QwdHlmM3FxdHd0Zm8zcjZjIn0.dnnrVSng-q2-M8eCStt0Jw';

     //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; 
    
    //For Custome basemaps - Replace your username and StyleID
    var customBasemap = L.tileLayer(mbStyleUrl, {id: 'taraskaduk/ckgzi2yxp0m7k19phvfjao6xm', token: apitoken,  attribution: mbAttr});
    
    //For MabBox Standard Basemaps
    var standardBasemap = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    //create the map*/
    var map = L.map('map', {
        center: [30.31, -81.66],//Coordinated to center the map
        zoom: 15, //zoom level
        layers:customBasemap //basemap
    });
    
     var baseLayers = {
		"Standard": standardBasemap,
        "Custom": customBasemap
    };
    
    L.control.layers(baseLayers).addTo(map);
    
};

//calling the funcation
$(document).ready(createMap);   