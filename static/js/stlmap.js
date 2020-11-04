// Create the tile layer that will be the background of our map
// var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "light-v10",
//   accessToken: API_KEY
// });

// Store our API endpoint inside queryUrl
// var queryUrl = "https://opendata.arcgis.com/datasets/e5728d926a8a4a20ac511d3698f88917_0.geojson";


// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [38.6270, -90.1994,],
  zoom: 18
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);








// var data = fetchJSON('resources/convert.json')
//   .then(function (data) { return data })
//   // Once we get a response, send the data.features object to the createFeatures function
//   givers(data);
// // Perform a GET request to the query URL
 


   





// function givers(stlRestaurants) {


//   createMap(stl)

//   function createMap(stl) {

//     // Define streetmap 
//     var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//       attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//       tileSize: 512,
//       maxZoom: 18,
//       zoomOffset: -1,
//       id: "mapbox/streets-v11",
//       accessToken: API_KEY
//     });


//     // Define a baseMaps object to hold our base layers
//     var baseMaps = {
//       "Street Map": streetmap,
//     };

//     // Create overlay object to hold our overlay layer
//     // var overlayMaps = {
//     //   Earthquakes: earthquakes
//     // };

//     // Create our map, giving it the streetmap and earthquakes layers to display on load
//     var myMap = L.map("map", {
//       center: [
//         38.6270, 90.1994,
//       ],
//       zoom: 5,
//       layers: [streetmap]
//     });

//     // make sure there is a legend to help the lost wanderers
//     var legend = L.control({ position: 'bottomright' });

//     legend.onAdd = function (myMap) {

//       var div = L.DomUtil.create('div', 'info legend'),
//         // grades = [4.5, 4.7, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5],
//         labels = [];

//       // loop through our density intervals and generate a label with a colored square for each interval
//       // for (var i = 0; i < grades.length; i++) {
//       //   div.innerHTML +=
//       //     '<i style="background:' + colors(grades[i] + 1) + '"></i> ' +
//       //     grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
//       // }

//       // return div;
//     };

//     legend.addTo(myMap);

//     L.control.layers(baseMaps, overlayMaps, {
//       collapsed: false
//     }).addTo(myMap);

//   }


// }
