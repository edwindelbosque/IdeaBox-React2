import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  render() {
    return (
      <form>
        <input
          placeholder='Title'
          type='text'
        />
        <input
          placeholder='Description'
          type='text'
        />
        <button>Create Idea</button>
      </form>
    )
  }
}

export default Form;