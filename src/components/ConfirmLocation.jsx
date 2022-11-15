import React from "react";
import { NavLink } from "react-router-dom";
import { getLocation } from "../utils/GeoLocation";

export default function ConfirmLocation() {
  return (
    <>
    {/*Allowing location and going to the tasks page*/}
      <NavLink onClick={getLocation} to="/nightlifetasks">
        Allow location services
      </NavLink>
      OR
      <a href="/scanner">Scan QR</a>
    </>
  );
}
