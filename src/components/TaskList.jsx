import React from "react";
import { NavLink } from "react-router-dom";

export default function TaskList() {
  return (
    <div>
      {/*From wonderful w3schools...*/}
      <label class="container">
        Find a stranger and drink a shot with them
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>

      <label class="container">
        Find someone who works for the city, get their autograph & take a selfie
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>

      <label class="container">
        Go to a restaurant and make them give you a local dish for free
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>

      <label class="container">
        <NavLink to="/quiz">
          Quiz
          <input type="checkbox" />
          <span class="checkmark"></span>
        </NavLink>
      </label>
    </div>
  );
}
