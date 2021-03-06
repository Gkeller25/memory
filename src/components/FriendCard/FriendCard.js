import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  
  <div className="card" onClick={() => props.onClicked(props.id)} style={{ backgroundImage: `url(${props.image})` }}>
    <div className="img-container">
      
        {/*<img alt={props.name} src={props.image} />*/}
        
    </div>
    {/*<div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Homeworld:</strong> {props.homeworld}
        </li>
      </ul>
</div>*/}
  </div>
  
);

export default FriendCard;
