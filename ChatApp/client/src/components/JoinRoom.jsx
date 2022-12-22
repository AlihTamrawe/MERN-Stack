import React, { useState } from 'react'

const JoinRoom = (props) => {
    const {myfun} =props
    const [name,setName] =useState('')

    const handelSubmit =(e) =>{
      e.preventDefault( )
        myfun(name)
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder='Your Name' onChange={e=>setName(e.target.value)}/>
            <button>Join</button>
        </form>
    </div>
  )
}

export default JoinRoom
