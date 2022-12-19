import React from 'react';
import moment from 'moment';

class ApplicationChecker extends React.Component {
  constructor(props) {
    super(props)

    // Method 3 and Method 4.
    this.state = {
      isDay: this.props.date ? (moment().isSame(this.props.date, 'minute') ? 'today' : moment().isBefore(this.props.date, 'minute') ? 'past' : 'future') : null
    }
  }

  render() {
    // Method 1.
    // let isDay = null;
    // if (moment().isSame(this.props.date, 'minute')) {
    //   isDay = 'today';
    // } else if (moment().isBefore(this.props.date, 'minute')) {
    //   isDay = 'past';
    // } else {
    //   isDay = 'future';
    // }

    // return (
    //   <div>{isDay === 'today' ? 'Today!' : isDay === 'past' ? 'Past!' : 'Future!'}</div>
    // )

    // Method 2.
    // const isDay = moment().isSame(this.props.date, 'minute') ? 'today' : moment().isBefore(this.props.date, 'minute') ? 'past' : 'future';
    
    // return (
    //   <div>{isDay === 'today' ? 'Today!' : isDay === 'past' ? 'Past!' : 'Future!'}</div>
    // )

    // Method 3 - through state.
    // return (
    //   <div>{this.state.isDay === 'today' ? 'Today!' : this.state.isDay === 'past' ? 'Past!' : 'Future!'}</div>
    // )

    // Method 4 - through state.
    if (this.state.isDay === 'today') {
      return <div>Today!</div>
    } else if (this.state.isDay === 'past') {
      return <div>Past!</div>
    } else if (this.state.isDay === 'future') {
      return <div>Future!</div>
    } else {
      return <div>No date!</div>
    }
  }
}

export default ApplicationChecker;