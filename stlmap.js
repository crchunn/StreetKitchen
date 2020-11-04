// function sites


// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
  