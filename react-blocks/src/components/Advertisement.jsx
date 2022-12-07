import React, { Component } from 'react'



const divStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
    color: '#b4a7d6',
    border: 'none',
    margin:'2px',
    width:'150px',
    height:'250px',
    flexdirection:'column'



};

export default class Advertisement extends Component {
  render() {
    return (
      <div style={ divStyle }>
                <p>Advertisement</p>

      </div>
    )
  }
}
