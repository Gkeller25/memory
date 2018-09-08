import React from "react";

const Nav = props => (

  <nav class="nav nav-pills nav-fill bg-primary">

        <h2 className="nav-item  text-light" href="/">Star Wars Click Memory Game</h2>
      
      
        <h3 className="nav-item  text-light">{props.message}</h3>
     
     
        <h3 className="nav-item  text-light"> Score: {props.score}</h3>  
      
      
        <h3 className="nav-item  text-light">Top Score: {props.topScore}</h3> 
      
    
  </nav>

);

export default Nav;
