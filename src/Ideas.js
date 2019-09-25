import React, { Component } from 'react';
import './Ideas.css';
import Card from './Card';

class Ideas extends Component {

  render() {
    return (
      <main>
        <Card />
        <Card />
        <Card />
      </main>
    );
  }
}

export default Ideas;