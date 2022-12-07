import React, { Component } from 'react'

const divStyle = {
    padding: '12px 15px',
    margin:'2px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: '#6aa84f', 
    color: '#6aa84f',
    border: 'none',
    diplay:''

};

export default class Header extends Component {
    
  render() {
    return (
        <div style={ divStyle }>
        <p>Header</p>
      </div>
    )
  }
}
