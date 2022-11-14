import React from "react";
import Header from "../components/Header";
import Nav from "../components/nav";

import { getLocation } from "../utils/GeoLocation";
import Subcategories from "../components/Subcategories";
import PlayCarousel from "../components/PlayCarousel";

export default function ExplorePage() {
  getLocation();

  return (
    <>
      <Header />
      <PlayCarousel/>
      <Subcategories id={3} />
      <Subcategories id={62} />
      <Subcategories id={36} />
      <Subcategories id={58} />
      <Nav />
    </>
  );
}
