import React from 'react'

class NewsItemClass extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default NewsItemClass;