import React from "react";
import "./PhotoCard.css";

const PhotoCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={props.onClick}/>
    </div>
  </div>
);

export default PhotoCard;
