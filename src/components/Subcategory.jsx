/* Subcategory component
 * Returns a subcategory or in the case of events, returns the events themselves
 */

import bear from "../icons/bear.png";
import castle from "../icons/castle.png";
import art from "../icons/art.png";
import amusementpark from "../icons/amusementpark.png";
import park from "../icons/amusementpark.png";
import boat from "../icons/boat.png";
import restaurant from "../icons/restaurant.png";
import { useRef } from "react";

export default function Subcategory({ subcategory, main }) {
  const ref = useRef();
  /* console.log(main) */
  return (
    <a
      href={`/categories/${main}/${subcategory.Id}`}
      className="card"
      ref={ref}
    >
      {/*This might be crazy, but it displays icons based on their name*/}

      {subcategory?.name === "Zoos and Animal Parks" ? (
        <img className="card-icon" src={bear} alt="icon" />
      ) : subcategory.Name === "Architecture and Urban Spaces" ||
        subcategory.Name === "Churches and Abbeys" ||
        subcategory.Name === "Ancient Monuments & Ruins" ||
        subcategory.Name === "Castles and manor houses" ? (
        <img className="card-icon" src={castle} alt="icon" />
      ) : subcategory.Name === "Artists and Artisans" ||
        subcategory.Name === "Galleries" ||
        subcategory.Name === "Street Art and Sculptures" ||
        subcategory.Name === "Museums" ||
        subcategory.Name === "DIY Tours" ||
        subcategory.Name === "Cultural Centres / Music venue" ? (
        <img className="card-icon" src={art} alt="icon" />
      ) : subcategory.Name === "Amusement and Theme Parks" ||
        subcategory.Name === "Other attractions" ||
        subcategory.Name === "Theatres/Cinemas" ||
        subcategory.Name === "Cultural Centres / Music venue" ||
        subcategory.Name === "Other activities" ? (
        <img className="card-icon" src={amusementpark} alt="icon" />
      ) : subcategory.Name === "Parks and gardens" ||
        subcategory.Name === "Natural Areas" ||
        subcategory.Name === "Outdoor Gyms" ? (
        <img className="card-icon" src={park} alt="icon" />
      ) : subcategory.Name === "Swimming lakes" ||
        subcategory.Name === "Wellness" ||
        subcategory.Name === "Swimming pools and water parks" ||
        subcategory.Name === "Beaches and lidos" ||
        subcategory.Name === "Yachting harbours" ||
        subcategory.Name === "Boat Rental" ? (
        <img className="card-icon" src={boat} alt="icon" />
      ) : subcategory.Name === "Restaurants" ||
        subcategory.Name === "Cafés" ||
        subcategory.Name === "Local Specialties" ? (
        <img className="card-icon" src={restaurant} alt="icon" />
      ) : subcategory.Id === 58 ? (
        <img
          className="card-icon"
          src={park}
          alt="icon"
          style={{ display: "none" }}
        />
      ) : (
        ""
      )}

      <div className="card-title">{subcategory.Name}</div>

      {/* If the id is 58, we are looking at an event, and in that case we get the first available image
      from the event's gallery */}
      {subcategory.MainCategory?.Id === 58 ? (
        <img
          className="event-image"
          alt={subcategory.Files[0]?.AltText}
          src={subcategory.Files[0]?.Uri}
        />
      ) : (
        ""
      )}

      {/*This huge if statement is for the background colors*/}

      {/*Attractions
      {subcategory.MainCategory?.Name === "Attractions"
        ? (ref.current.style.backgroundColor = "red")
        : subcategory.MainCategory?.Name === "Places to eat"
        ? (ref.current.style.backgroundColor = "blue")
        : subcategory.MainCategory?.Name === "Activities"
        ? (ref.current.style.backgroundColor = "black")
        : ""}*/}
    </a>
  );
}
