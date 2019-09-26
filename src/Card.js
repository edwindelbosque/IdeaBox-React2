import React from 'react';
import './Card.css';

const Card = ({ title, description, deleteIdea, id }) => {

  return (
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>
        DELETE
      </button>
    </article>
  );
}

export default Card;