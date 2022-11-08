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
          <NavLink className="navlink" end to="/">Home</NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/otherpage">Other Page</NavLink>
        </div>

      </nav>
    </div>
  );
}
