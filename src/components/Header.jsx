import React from "react";
import heartlogo from "../heart-logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="points-container">
        <div className="points-sum">123</div>
        <img
          src={heartlogo}
          alt="coin"
          style={{ width: "15px", height: "15px" }}
        />
      </div>

      <div className="info">
          <NavLink className="navlink" to="/info">
            i
          </NavLink>   
      </div>
    </div>
  );
}
