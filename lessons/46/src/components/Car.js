import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
          <div>
            <h3>{this.props.index + 1}. Car: {this.props.name}</h3>
            <p>Speed: {this.props.speed}</p>
          </div>
    )
  }
}

export default Car;