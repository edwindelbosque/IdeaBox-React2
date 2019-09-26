import React from 'react';
import './Ideas.css';
import Card from './Card';

const Ideas = ({ ideas, deleteIdea }) => {

  return (
    <main>
      {ideas.map(idea => {
        return (
          <Card
            title={idea.title}
            description={idea.description}
            id={idea.id}
            key={idea.id}
            deleteIdea={deleteIdea}
          />
        )
      })}
    </main>
  );
}

export default Ideas;