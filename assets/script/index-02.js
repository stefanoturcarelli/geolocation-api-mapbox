"use strict";

let lat, long;

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3RlZmFub2d0ciIsImEiOiJjbHE0aGF3b2swNzRoMmpwa2VjNHRiNWhvIn0.6hbTVaMv2H7zYrwpjulBQQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: [-97.143173, 49.895313], // starting position [lng, lat]
  zoom: 4, // starting zoom
  pitch: 40,
  style: "mapbox://styles/mapbox/streets-v12", // style URL
});

map.dragPan.disable();
map.keyboard.disable();
map.scrollZoom.disable();
map.doubleClickZoom.disable();
// map.touchZoomRotate.disableRotation();

function getLocation(position) {
  const { latitude, longitude } = position.coords;

  lat = latitude;
  long = longitude;
  // Center the map on the user's position
  goCenter(latitude, longitude);
  // Create a marker of the user's position on the map
  createMarker(latitude, longitude);
}

// Center the map on the coordinates of the user's position
function goCenter(latitude, longitude) {
  map.flyTo({
    center: [longitude, latitude],
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    zoom: 16,
  });
}

// Store the current marker
let currentMarker = null;

// Create a marker on the map
function createMarker(latitude, longitude) {
  // If a marker already exists, remove it
  if (currentMarker) {
    currentMarker.remove();
  }

  // Create a default Marker and add it to the map.
  const marker = new mapboxgl.Marker({
    color: "#0599ff",
    rotation: 0,
  })
    .setLngLat([longitude, latitude])
    .addTo(map);

  // Update the current marker
  currentMarker = marker;
}

// The error/failure callback function
function errorHandler(error) {
  console.log(error.message);
}

// Location options
const options = {
  maximumAge: 0, // don't use the cached location
  timeout: 5000,
  enableHighAccuracy: true,
};

if ("geolocation" in navigator) {
  const geo = navigator.geolocation;
  geo.watchPosition(getLocation, errorHandler, options);
} else {
  alert("Geolocation API is not supported by your browser");
}
