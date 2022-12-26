import React from 'react'

const fruit = [
  {
    title: 'Apple',
    value: 'apple'
  },
  {
    title: 'Orange',
    value: 'orange'
  },
  {
    title: 'Banana',
    value: 'banana'
  }
]

class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comment: '',
      fruit: 'banana',
      errors: {
        nameError: '',
        commentError: ''
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  handleChange(e) {
    console.log(e.target);

    this.setState({
      name: e.target.value
    })

    this.setState({
      errors: {
        nameError: this.state.name.length < 4 ? 'Too short' : ''
      }
    })
  }

  handleCommentChange(e) {
    console.log(e.target);

    this.setState({
      name: e.target.value
    })

    this.setState({
      errors: {
        nameError: this.state.name.length < 4 ? 'Too short' : ''
      }
    })
  }

  handleFruitChange(e) {
    this.setState({
      fruit: e.target.value
    })
  }

  render () {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" value={this.state.name} onChange={(e) => this.handleChange(e)}></input>
        
        {this.state.errors.nameError.length > 0 && <span>{this.state.errors}</span>}

        <textarea value={this.state.comment} onChange={(e) => this.handleCommentChange(e)}/>
        {this.state.errors.nameError.length > 0 && <span>{this.state.errors}</span>}

        <select value={this.state.fruit} onChange={(e) => this.handleFruitChange(e)}>
          {fruit.map((singleFruit, index) =>  <option key={index} value={singleFruit.value}>{singleFruit.title}</option>)}
        </select>
        {this.state.errors.nameError.length > 0 && <span>{this.state.errors}</span>}


        <button type="submit">
          Send
        </button>
      </form>
    )
  }
}

export default Feedback;