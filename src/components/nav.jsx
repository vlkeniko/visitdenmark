// This documment shows the menuitems(links) in the app's main navigation menu
// Implemented by app.js.

// Eniko
// Icons + Hover CSS: Razvan

import { NavLink } from "react-router-dom";
import Explore from "../exploreicon.png";
import Play from "../playicon.png";
import Discount from "../discounticon.png";

export default function Nav() {
  return (
    <div className="all-nav">
      <nav>
        <div className="navlink-container">
          <NavLink className="navlink" end to="/">
            <img
              src={Explore}
              alt="explore"
              style={{ width: "20px", height: "auto"}}
            />

            <p>Explore</p>
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/play">
            {" "}
            <img
              src={Play}
              alt="play"
              style={{ width: "20px"}}
            />
            <p>Play</p>
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/discount">
            <img
              src={Discount}
              alt="discount"
              style={{ width: "20px"}}
            />

            <p>Discounts</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
