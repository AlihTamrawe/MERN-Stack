import React, { Component } from 'react'


const divStyle = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: '#e06666', 
    border: 'none',
    width:'450px',
    left:'30%',
    height:'300px',
    display:'flex',

    position:'absolute',
    top:'100px',
    display: 'grid',
    gridtemplateareas: 'myArea myArea myArea ',
    gap: '10px',
    
    padding: '10px'





};

export default class Main extends Component {
  render() {
    return (
        <div style={ divStyle }>
                <p>Main</p>
                {this.props.children}

      </div>
    )
  }
}
