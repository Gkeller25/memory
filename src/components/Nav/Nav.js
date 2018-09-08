import React from "react";

const Nav = () => (
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary flex-row d-flex justify-content-around W-100">
  
    <ul className="nav">
      <li className="nav-item  text-light">
        <h2  href="/">Star Wars Click Memory Game</h2>
      </li>
      <li className="nav-item text-light">
      <h3>You guessed correctly!</h3>
      </li>
      <li className="nav-item text-light">
      <h3> Score: 0 | Top Score: 0</h3>
      </li>
    </ul>
   
  </nav>
  
);

export default Nav;
