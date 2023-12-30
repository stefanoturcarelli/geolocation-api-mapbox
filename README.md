# Geolocation API and Mapbox

---

The Geolocation API allows the user to provide their location to web applications if they so desire. The user is asked for permission to report location information for privacy reasons.

- The geolocation API is accessed via a call to `navigator.geolocation`

**Check for geolocation support:**

```jsx
"use strict";
if (navigator.geolocation) {
  console.log("Geolocation is supported!");
} else {
  console.log("Geolocation is not supported for this Browser/OS.");
}
```

## Demo

---

[Click here to see the demo](https://stefanoturcarelli.github.io/gps-map/)
