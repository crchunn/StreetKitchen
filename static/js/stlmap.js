// Create the tile layer that will be the background of our map
// var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "light-v10",
//   accessToken: API_KEY
// });

function givers(stlRestaurants) {


  createMap(stl)

  function createMap(stl) {

    // Define streetmap 
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    });


    // Define a baseMaps object to hold our base layers
    var baseMaps = {
      "Street Map": streetmap,
    };

    // Create overlay object to hold our overlay layer
    // var overlayMaps = {
    //   Earthquakes: earthquakes
    // };

    // Create our map, giving it the streetmap and earthquakes layers to display on load
    var myMap = L.map("map", {
      center: [
        38.6270, 90.1994,
      ],
      zoom: 5,
      layers: [streetmap]
    });

    // make sure there is a legend to help the lost wanderers
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (myMap) {

      var div = L.DomUtil.create('div', 'info legend'),
        // grades = [4.5, 4.7, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5],
        labels = [];

      // loop through our density intervals and generate a label with a colored square for each interval
      // for (var i = 0; i < grades.length; i++) {
      //   div.innerHTML +=
      //     '<i style="background:' + colors(grades[i] + 1) + '"></i> ' +
      //     grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      // }

      // return div;
    };

    legend.addTo(myMap);

    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);

  }


}
