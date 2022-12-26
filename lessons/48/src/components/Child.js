import React from 'react';

class Child extends React.Component {
  handleClick() {
    // We form onOriginChange this way. 'on' is always added. 'Origin' - the name of the props. 'Change' - when it is changed.
    this.props.onOriginChange(this.props.origin + 1)
  }

  render () {
    return (
      <div>
        <div>
          Child Component
        </div>
        <button onClick={() => this.handleClick()}>
          Increase value: {this.props.origin}
        </button>
      </div>
    )
  }
} 

export default Child;