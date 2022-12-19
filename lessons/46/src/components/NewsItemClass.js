import React from 'react';

class NewsItemClass extends React.Component {
  constructor(props) {
    super(props)

    // These can be used as variables.
    this.state = {
      titleBig: this.props.title,
      space: '1',
      isSpanClicked: false
    }

    // Debugging of state.
    console.log(this.state.titleBig);

    // We should redeclare state with the method .setState({}).
    // Changing the selected variable, the others remain the same.
    this.setState({
      space: '2'
    })

    // We can not re-declare state like this.
    // 1. It will decrease the productivity.
    // 2. Breaking the chain of mutations.
    // this.state.space = 2;
  }

  spanClicked() {
    this.setState({
      // === isSpanClicked: this.state.isSpanClicked ? true : false
      isSpanClicked: !this.state.isSpanClicked
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.titleBig}</h3>
        <p>{this.props.text}</p>
        {/* Conditional rendering is working through rendering */}
        <span onClick={() => spanClicked()}>Click here! ({ this.state.isSpanClicked ? 'true' : 'false' })</span>
      </div>
    )
  }
}

export default NewsItemClass;