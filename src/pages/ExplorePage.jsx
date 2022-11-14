import React from "react";
import Categories from "../components/Categories";
// import Places from "../components/Places";
// import Attractions from "../components/Attractions";
// import Activities from "../components/Activities";
// import Events from "../components/Events";
import Header from "../components/Header";
import Nav from "../components/nav";

import { getLocation } from "../utils/GeoLocation";

export default function ExplorePage() {
  getLocation();

  return (
    <>
      <Header />
    <Categories/>
      <Nav />
    </>
  );
}
