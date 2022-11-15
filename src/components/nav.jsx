// This documment shows the menuitems(links) in the app's main navigation menu
// Implemented by app.js.

// Eniko
// Icons + Hover CSS: Razvan

import { NavLink } from "react-router-dom";
import Explore from "../icons/search.svg";
import Play from "../icons/play.svg";
import Discount from "../icons/discount.svg";

export default function Nav() {
  return (
    <div className="all-nav">
      <nav>
        <div className="navlink-container">
          <NavLink className="navlink" end to="/">
            <img
              src={Explore}
              alt="explore"
              style={{ width: "15px", height: "auto"}}
              className="nav-icon"
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
              style={{ width: "15px"}}
              className="nav-icon"
            />
            <p>Play</p>
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/discount">
            <img
              src={Discount}
              alt="discount"
              style={{ width: "15px"}}
              className="nav-icon"
            />

            <p>Discounts</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
