import React, { useState }  from 'react'

const Square =(props) => {
    const {boxs} =props.box;
    const rectangle ={
        display: 'inline-block',
        width: props.box.width+'px',
        height: props.box.height+'px',
        background: props.box.color,
        margin: '10px'

      }
        
   console.log(props.box)
  return (
    <div>
      
        <div  style={rectangle } />   
        {props.children}
    </div>
  )
}

export default Square
