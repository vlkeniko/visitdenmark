export function getLocation() {
  let result = {};

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(savePosition);
    result.success = true;
  } else {
    result.error = "Geolocation is not supported by this browser.";
    result.success = false;
  }

  //console.log(result);
  return result;
}

export function getDistance(target) {
  let coordinates = localStorage.getItem('coordinates') ? JSON.parse(localStorage.getItem("coordinates")) : "";
  console.log(
    getDistanceFromLatLonInKm(
      coordinates.latitude,
      coordinates.longitude,
      target.latitude,
      target.longitude
    ).toFixed(1)
  );
}

export function savePosition(position) {
  let result = {};
  result.latitude = position.coords.latitude;
  result.longitude = position.coords.longitude;
  localStorage.setItem('coordinates', JSON.stringify(result));

  //console.log(result);
  
  getDistance({ latitude: 59.3225525, longitude: 13.4619422 });
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

//watchPosition({ latitude: 59.3225525, longitude: 13.4619422 });

function watchPosition(target) {
  console.log("🚀 ~ file: GeoLocation.js ~ line 55 ~ watchPosition ~ watchPosition", watchPosition)
  console.log("🚀 ~ file: GeoLocation.js ~ line 55 ~ watchPosition ~ target", target)

  let id;
  let options;

  id = navigator.geolocation.watchPosition(success, error, options);

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 30000,
  };

  function success(pos) {
    const crd = pos.coords;

    if (
      target.latitude === crd.latitude &&
      target.longitude === crd.longitude
    ) {
      console.log("Congratulations, you reached the target");
      navigator.geolocation.clearWatch(id);
    }

    console.log(crd);
    console.log(
      getDistanceFromLatLonInKm(
        crd.latitude,
        crd.longitude,
        target.latitude,
        target.longitude
      ).toFixed(1)
    );
  }

  function error(err) {
    console.error(`ERROR(${err.code}): ${err.message}`);
  }
}
