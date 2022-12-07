import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Mydiv extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: "On"
        };
    }
  static propTypes = {
    prop: PropTypes
    
  }
  flipSwitch = () => {
    if( this.state.position === "On" ) {
        this.setState({ position: "Off" });
    } else {
        this.setState({ position: "On" });
    }
}

  render() {
    return (
      <div>
        <h2>{this.props.myname}</h2>
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
        <p>The light is currently { this.state.position }</p>
        <button onClick={ this.flipSwitch() }>Flip Switch</button>        {this.props.children}
        
      </div>
    )
  }
 
}
