const mapboxgl = require('mapbox-gl');
const map = require('./index');
//Create a new function that can be used to build new markers for a given type (hotel, restaurant, or activity) and coordinates.

const markerDomEl = document.createElement('div');

markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

const iconURLs = {
  hotels: 'url(http://i.imgur.com/D9574Cu.png)',
  restaurants: 'url(http://i.imgur.com/cqR6pUI.png)',
  activities: 'url(http://i.imgur.com/WbMOfMl.png)'
};

const buildMarker = (type, coords) => {
  switch (type) {
    case 'activity':
      markerDomEl.style.backgroundImage = iconURLs.activities;
      return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
    case 'hotel':
      markerDomEl.style.backgroundImage = iconURLs.hotels;
      return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
    case 'restaurant':
      markerDomEl.style.backgroundImage = iconURLs.restaurants;
      return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
    default:
      markerDomEl.style.backgroundImage = iconURLs.activities;
      return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
  }
};

module.exports = buildMarker;
