


////////////////////////////////////////////////////////////////////////////////////////////
//setting up the map//
////////////////////////////////////////////////////////////////////////////////////////////

// initialize map
var map = L.map('map',{zoomControl: true}).setView([56.224691, -3.262220], 10);


////////////////////////////////////////////////////////////////////////////////////////////
//set up Control Placeholders//
////////////////////////////////////////////////////////////////////////////////////////////
    

	
	

   


// set source for map tiles
ATTR = '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, ' +
'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> | ' +
'&copy; <a href="https://cartodb.com/attributions">CartoDB</a>';
CDB_URL = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';

// add tiles to map
L.tileLayer(CDB_URL, {attribution: ATTR}).addTo(map);

////////////////////////////////////////////////////////////////////////////////////////////
//Area Change//
////////////////////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////////////////////////
//styling and popups//
/////////////////////////////////////////////////////////////////////////////////////////////











//create layer icons
var fgm_18 = L.icon({
  iconUrl: 'fgm18_icon2.png',
  iconSize: [35, 40],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35]
  
  
  
});
var fgm_9 = L.icon({
  iconUrl: 'fgm9_icon2.png',
  iconSize: [35, 40],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35]
});

var fgm_retail = L.icon({
  iconUrl: 'retail_black_35.png',
  iconSize: [35, 40],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35]
});

var fgm_travel = L.icon({
  iconUrl: 'travel_35.png',
  iconSize: [35, 40],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35]
});


//create markers with different icons
function getfgm_18Marker(feature, latlng) {
  return L.marker(latlng, {
    icon: fgm_18
  });
}
function getfgm_9Marker(feature, latlng) {
  return L.marker(latlng, {
    icon: fgm_9
  });
}

function getfgm_retailMarker(feature, latlng) {
  return L.marker(latlng, {
    icon: fgm_retail
  });
}
function getfgm_travelMarker(feature, latlng) {
  return L.marker(latlng, {
    icon: fgm_travel
  });
}

//attach tooltips to the markers
// commented out while testing popup javascript links

//function oneachfeature2(feature, layer) {          
//                   layer.bindTooltip("<strong>" + feature.properties.name + "</strong>");
//                   layer.bindPopup("<strong>" + feature.properties.name + "</strong><br/>" + feature.properties.phone + "<br/>" + "<a target = _blank href=" +
//                feature.properties.url + ">" + feature.properties.url + "</a>").openPopup();
//
//}

//attach tooltips and popup to the markers as required
// touch devices do not need tooltip
function oneachfeature2(feature, layer) {          
  	// if a touch device, attach pop up but not tooltip
	if (L.Browser.touch){
   		layer.bindPopup("<strong>" + feature.properties.name + "</strong><br/>" + feature.properties.phone + "<br/>" + '<button class="trigger">Say hi</button>').openPopup();
     }
// else (if not a touch device) attach pop up and tooltip
	else {
			layer.bindTooltip("<strong>" + feature.properties.name + "</strong>");
			layer.bindPopup("<strong>" + feature.properties.name + "</strong><br/>" + feature.properties.phone + "<br/>" + '<button class="trigger">Say hi</button>'>test change map from popup on desktop devices</a>").openPopup();
	}
}


////////////////////////////////////////////////////////////////////////////////////////////
//displaying the data//
/////////////////////////////////////////////////////////////////////////////////////////////

//create empty GeoJSON layers to be populated later
var fgm_18Layer = L.geoJson(false, {
    pointToLayer: getfgm_18Marker,
    onEachFeature: oneachfeature2
	
	}).addTo(map);
	
var fgm_9Layer = L.geoJson(false, {
    pointToLayer: getfgm_9Marker,
    onEachFeature: oneachfeature2
	
	}).addTo(map);

var fgm_retailLayer = L.geoJson(false, {
    pointToLayer: getfgm_retailMarker,
   onEachFeature: oneachfeature2
	
	}).addTo(map);	
	
var fgm_travelLayer = L.geoJson(false, {
    pointToLayer: getfgm_travelMarker,
    onEachFeature: oneachfeature2
	
	}).addTo(map);		
	
//populate GeoJSON layers with data from external files
$.getJSON("fgm_18.geojson", function(data) {
    fgm_18Layer.addData(data);
});
$.getJSON("fgm_9.geojson", function(data) {
    fgm_9Layer.addData(data);
});

$.getJSON("fgm_retail.geojson", function(data) {
    fgm_retailLayer.addData(data);
});

$.getJSON("fgm_travel.geojson", function(data) {
    fgm_travelLayer.addData(data);
});


// var fgmLayer = L.layerGroup([fgm_18Layer, fgm_9Layer, fgm_retailLayer, fgm_travelLayer ]);

var fgmLayer = L.featureGroup([fgm_18Layer, fgm_9Layer, fgm_retailLayer, fgm_travelLayer]);

