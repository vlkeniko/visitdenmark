export function getLocation() {
  let result = {};

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    result.success = true;
  } else {
    result.error = "Geolocation is not supported by this browser.";
    result.success = false;
  }

  console.log(result);
  return result;
}

export function showPosition(position) {
  let result = {};
  result.latitude = position.coords.latitude;
  result.longitude = position.coords.longitude;

  console.log(result);
  return result;
}
