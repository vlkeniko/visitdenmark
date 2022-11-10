// This documment shows the menuitems(links) in the app's main navigation menu
// Implemented by app.js.

// Eniko
// Icons + Hover CSS: Razvan

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="all-nav">
      <nav>
        <div className="navlink-container">
          <NavLink className="navlink" end to="/">Explore</NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/play">Play</NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/discount">Discount</NavLink>
        </div>
      </nav>
      
    </div>
  );
}
