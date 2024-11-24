import React from "react";
import "./Card.css";

const Card = ({ animal, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={animal.image} alt={animal.name}/>
      <p>{animal.name}</p>
    </div>
  );
};

export default Card;