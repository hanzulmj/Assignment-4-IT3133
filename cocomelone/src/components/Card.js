import React from "react";
import "./Card.css";

const Card = ({ animal, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={animal.img} alt={animal.name}/>
      <p>{animal.name}</p>
    </div>
  );
};

export default Card;