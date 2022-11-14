import React from 'react'
import Nav from "../../components/nav";
import playimage from "../../play-image.png";

export default function PlayNature() {
  return (
    <div>
    <img className="play-image" src={playimage} alt="fam" />
    <h1>Nature</h1>
    <p className="play-description">
      Whether you’re looking for city planners, activities to enjoy, or you
      just search for a fun way to sightsee in a new city, scavenger hunts are
      a lot of fun. Plus, you can use GPS coordinates, use clever clues, and
      other fun concepts to get to know random people, to think and solve
      riddles to get many discounts that you can use in places around the
      city.
    </p>
    <button className="start-button">START</button>
    <Nav />
  </div>
  )
}
