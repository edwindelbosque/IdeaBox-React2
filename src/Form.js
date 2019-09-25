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

  handleClick = (event) => {
    event.preventDefault();
    const newIdea = {
      title: this.state.title,
      description: this.state.description,
      id: Date.now()
    }

    this.props.submitIdea(newIdea);
    this.setState({
      title: '',
      description: ''
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
        <button
          onClick={this.handleClick}>
          Create Idea
        </button>
      </form>
    )
  }
}

export default Form;