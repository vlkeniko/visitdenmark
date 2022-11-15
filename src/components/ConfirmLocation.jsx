import React from "react";
import { NavLink } from "react-router-dom";
import { getLocation } from "../utils/GeoLocation";

export default function ConfirmLocation() {
  return (
    <div className="location-content">
    <h1>Confirm your location</h1>
    {/*Allowing location and going to the tasks page*/}
      <NavLink className="location-button" onClick={getLocation} to="/nightlifetasks">
        Allow location services
      </NavLink>
      <br/>
      <br/>
      OR
      <br/>
      <br/>
      <a className="location-button" href="/scanner">Scan QR</a>
    </div>
  );
}
