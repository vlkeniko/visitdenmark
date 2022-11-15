import React from "react";
import Nav from "../../components/nav";
import playimage from "../../play-image.png";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function PlayFamily() {
  let navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className="img-gradient"><img className="play-image" src={playimage} alt="fam" /></div>
      <h1>Family</h1>
      <p className="play-description">
        Whether you’re looking for city planners, activities to enjoy, or you
        just search for a fun way to sightsee in a new city, scavenger hunts are
        a lot of fun. Plus, you can use GPS coordinates, use clever clues, and
        other fun concepts to get to know random people, to think and solve
        riddles to get many discounts that you can use in places around the
        city.
      </p>
      <button className="start-button" onClick={() => navigate("/location")}>START</button>      <Nav />
    </div>
  );
}
