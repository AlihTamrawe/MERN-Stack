import React from 'react'


const Display1=(props) => {
    const style1 ={
        'background-color':props.txt,
    }
  return (
    <div>
                <h1>Welcome to the display</h1>

        <p style={style1}> {props.txt}</p>
    </div>
  )
}

export default Display1
