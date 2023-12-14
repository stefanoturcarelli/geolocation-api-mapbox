mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlZmFub2d0ciIsImEiOiJjbHE0aGF3b2swNzRoMmpwa2VjNHRiNWhvIn0.6hbTVaMv2H7zYrwpjulBQQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-97.19304054369245, 49.81530902849667], // starting position [lng, lat]
  // MITT
  // longitude: -97.19304054369245
  // latitude: 49.81530902849667
  zoom: 11, // starting zoom
});
