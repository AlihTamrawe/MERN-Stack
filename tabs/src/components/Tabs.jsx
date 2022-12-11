import React from 'react'

const  Tabs =(props)  => {
    const {num} =props;
    var colors='white';
    var f =false;

    var tab2 = {
        display:'flex',
        width:'200px',
        height:'200px',
        border: '2px solid black ',
        background:'red'
    }
    const sendmy = ()=>{
        props.mfun(props.num);

    }
  
  return (

        <div style={tab2} >

        <h1 className='taba '  onMouseEnter={{background: f? 'black' : 'white',color: f? 'white' : 'black'}} onClick={sendmy}  >Tab{props.num} </h1>
        </div>
    
  )
}

export default Tabs
