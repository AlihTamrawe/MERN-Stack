import React  from 'react'

const Square =(props) => {
    const {colors} =props.colore;
    const rectangle ={
        display: 'inline-block',
        width: '100px',
        height: '100px',
        background: props.colore,
        margin: '10px'

      }
        
  return (
    <div>
        <p>{colors}</p>
        <div  style={rectangle } />   
        {props.children}
    </div>
  )
}

export default Square
