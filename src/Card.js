import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    return (
      <article>
        <h1>This is a title</h1>
        <p>This is the description.</p>
      </article>
    );
  }
}

export default Card;