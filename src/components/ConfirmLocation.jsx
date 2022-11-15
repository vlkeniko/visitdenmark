import React from 'react'
import { getLocation } from "../utils/GeoLocation";

export default function ConfirmLocation() {
  return (
    <>
        <button onClick={getLocation}>Allow location services</button>
        OR
        <a href='/scanner'>Scan QR</a>
    </>
  )
}
