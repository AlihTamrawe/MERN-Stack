import React, { Component } from 'react'



const divStyle = {
    padding: '1px 1px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: '#ffd966', 
    color: '#f0f',
    border: 'none',
    width:'100px',
    height:'280px',
    gridarea: 'myArea',



    margin:'2px',


};

export default class SubContents extends Component {
  render() {
    return (
        <div style={ divStyle }>
                <p>SubContents</p>

      </div>
    )
  }
}
