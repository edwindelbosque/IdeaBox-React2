import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Ideas from './Ideas';

class App extends Component {

  render() {
    return (
      <div className='main-app'>
        <h1>IdeaBox</h1>
        <Form />
        <Ideas />
      </div>
    )
  }
}



export default App;