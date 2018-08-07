const mapbox = require('mapbox-gl');

//Create a new function that can be used to build new markers for a given type (hotel, restaurant, or activity) and coordinates.

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
  switch(type) {
    case 'activity':
    //coord
    case 'hotel':
    //coord
    case 'restaurant':
    //coord
    default:

  }
};

module.exports = buildMarker;
