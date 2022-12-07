import React, { Component } from 'react'

const divStyle = {
    padding: '12px 15px',
    margin:'2px',

    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: '#6fa8dc', 
    color: '#fff',
    border: 'none',
    diplay:'flex',
    top:'100px',
    position:'absolute',
    width:'27%',
    left:'1%',
    height:'300px',


};
export default class Navigation extends Component {
  render() {
    return (
        <div style={ divStyle }>
                <p>Navigation</p>

      </div>
    )
  }
}
