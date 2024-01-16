
import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} alt={card.title} className="image"/>
      <h2>{card.title}</h2>
      <p>{card.message}</p>
    </div>
  );
};

export default Card;
