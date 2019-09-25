import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button>Create Idea</button>
      </form>
    )
  }
}

export default Form;