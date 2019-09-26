import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Ideas from './Ideas';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    }
  }

  createIdea = (newIdea) => {
    this.setState({
      ideas: [...this.state.ideas, newIdea]
    })
  }

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({
      ideas: filteredIdeas
    })
  }

  render() {
    return (
      <div className='main-app'>
        <h1>IdeaBox</h1>
        <Form submitIdea={this.createIdea} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </div>
    )
  }
}



export default App;