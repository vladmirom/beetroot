import React from 'react';
import Car from './Car'

class Garage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      space: '1'
    }
  }

  /** 
   * Live cycle of components.
   */
  componentDidMount() {
    // This is a place to add listeners.
    // Also, can change state.
    this.setState({
      space: '2'
    })

    // Add resize.
  }

  componentDidUpdate() {
    // Works when anything is changed.
    // console.log(prevProps, this.props);
    // if(JSON.stringify(prevProps.cars) !== JSON.stringify(prevProps.cars)) {
    //   // Do something.
    // }

    // Method forceUpdate() will re-render the component. Better not to use this often.
  }

  componentWillUnmount() {
    // Remove resize.
  }

  componentDidCatch(error, info) {
    // Useful to catch errors of the app.
    console.log(error, info);
  }

  render() {
    // Not the best approach.
    // if (this.props.cars.length) {
    //   return (
    //     <div>
    //       <h2>Garage</h2>
    //       <div>You have {this.props.cars.length} cars.</div>
    //     </div>
    //    )
    // } else {
    //   return (
    //     <div>
    //       <h2>Garage</h2>
    //       <div>You don't have cars.</div>
    //     </div>
    //    )
    // }

    // Same thing but better approach.
    return (
          <div>
            <h2>Garage</h2>
            {/* Method 1. */}
            { this.props.cars.lenght ? <div>You have {this.props.cars.length} cars.</div> : <div>You don't have cars.</div> }

            {/* Method 2. The same and it is better approach. */}
            { this.props.cars.lenght > 0 && <div>You have {this.props.cars.length} cars.</div> }
         
            {/* We use method .map( single => do something for each element ) for arrays. */}
            {/* If we work with props, we need to use method .map() only. */}
            {/* NOTE: key={index} is a unique key for better React performance. 
                It assigns the unique name that React uses to find this element faster. 
                Need to add index to each .map() so we don't have errors in console. */}
            {this.props.cars.map((car, index) => <Car key={index} name={car.name} speed={car.speed} index={index}/>)}
          </div>
    )
  }
}

export default Garage;