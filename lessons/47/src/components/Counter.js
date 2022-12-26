import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      show: false
    }

    this.handlePressClick = this.handlePressClick.bind(this)
  }

  increase() {
    this.setState({
      value: ++this.state.value
    })
  }

  showMessage() {
    this.setState({
      show: !this.state.show
    })
  }


  handlePressClick(e, type = null) {
    // e.preventDefault()
    this.increase()
    this.showMessage()
  }

  render () {
    return (
      <div>
        <div>
          Value is: {this.state.value}
        </div>

        <div>show is: {this.state.show ? 'true' : 'false'}</div>

        {/* We have the problem of 'this' loss, so we need to cover it in function */}
        {/* <div onClick={() => this.handlePressClick()}>Press here to increase</div> */}

        {/* If we bind it lile on the line 12, then we don't need to wrap it into the section */}
        {/* <div onClick={this.handlePressClick}>Press here to increase</div> */}

        {/* We can have for event with parameters */}
        <div onClick={(e) => this.handlePressClick(e, '123')}>Press here to increase</div>
      </div>
    )
  }
}

export default Counter;