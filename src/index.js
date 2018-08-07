console.log('Esther, Keyairra, Evie');

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoia2Vla2VyejA4NiIsImEiOiJjamtrNGt4bzYwM2cwM2twbGFsN2pncG50In0.2gaycMIdU-qKGnV_ql_cjQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});