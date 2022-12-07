import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1> {props.firstName}, {props.lastName}</h1>
        <p>Age :{props.age}</p>
        <p>Hair color :{props.hairColor}</p>
        {props.children}
      
    </div>
  )
}

export default Header
