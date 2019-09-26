import React from 'react';
import './Card.css';

const Card = ({ idea }) => {

  return (
    <article key={idea.id}>
      <h1>{idea.title}</h1>
      <p>{idea.description}</p>
    </article>
  );
}

export default Card;