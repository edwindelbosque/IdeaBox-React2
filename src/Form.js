import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
        />
        <input
          type='text'
          placeholder='Description'
          name='title'
        />
        <button>Create Idea</button>
      </form>
    )
  }
}

export default Form;