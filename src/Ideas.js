import React from 'react';
import './Ideas.css';
import Card from './Card';

const Ideas = ({ ideas }) => {

  return (
    <main>
      {ideas.map(oneIdea => <Card idea={oneIdea} />)}
    </main>
  );
}

export default Ideas;