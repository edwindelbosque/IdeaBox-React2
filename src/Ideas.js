import React, { Component } from 'react';
import './Ideas.css';
import Card from './Card';

class Ideas extends Component {

  render() {
    return (
      <div>
        <h1>Ideas</h1>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Ideas;