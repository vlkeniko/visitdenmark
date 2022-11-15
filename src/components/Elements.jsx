import React from "react";
import { useParams } from "react-router";
import ElementItem from "./ElementItem";
import attractions from "../assets/data/en/categories/attractions.json";
import activities from "../assets/data/en/categories/activities.json";
import placesToEat from "../assets/data/en/categories/placesToEat.json";
import header from "../subcategoryheader.png";
import Nav from './nav'

export default function Elements() {
  // Anchor hrefs point to /maincategory-id/category-id through React router URL params
  // We get the ids from the url
  // Based on main category id and the subcategory id, we get the data from the jsons
  // Basically one component is used for showing all the locations

  let params = useParams();
  let toIterate = [];
  let name = "";
  console.log(params);
  switch (params.categoryid.toString()) {
    case "3":
      name = "Attractions";
      toIterate = attractions;
      break;
    case "36":
      name = "Activities";
      toIterate = activities;
      break;
    case "62":
      name = "Places to eat";
      toIterate = placesToEat;
      break;

    default:
      console.log("Nothing to see here");
      break;
  }

  return (
    <>
          <img className="subcategory-header" src={header} alt="suzy is french"/>
      <h1>{name}</h1>
      <div>
        {toIterate.map((element) =>
          /* console.log(params.subcategoryid, element.Category.Id) */ parseInt(
            params.subcategoryid
          ) === element.Category.Id ? (
            <ElementItem element={element} key={element.id} />
          ) : (
            ""
          )
        )}
      </div>
      <Nav/>
    </>
  );
}
