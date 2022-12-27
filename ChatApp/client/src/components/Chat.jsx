import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
const  Chat= (props)=> {
    const [socket] = useState(() => io(':8000'));
    const [msg,setMsg] =useState('')
    const [masseges,setMasseges]=useState([])
    const {user} = props;
    
    useEffect(() => {
      // we need to set up all of our event listeners
      // in the useEffect callback function
      console.log('Is this running?');
     
      socket.on('text', mg => setMasseges([...masseges,mg]) );
   
      // note that we're returning a callback function
      // this ensures that the underlying socket will be closed if App is unmounted
      // this would be more critical if we were creating the socket in a subcomponent
  
    }, [masseges])

      const handelSubmit =(e)=>{
        e.preventDefault();
        socket.emit('text', `${user}:${msg}`);
        console.log('send');

      }
  return (
    <div>

      <h1>Welcome {user}</h1>
        {masseges.map((mss,i)=><p key={i}><span style={ mss.includes(user+':')?{ backgroundColor:'blue'}:{backgroundColor:'red'}}>{mss}</span></p>)}

        <form onSubmit={handelSubmit}>
            <label htmlFor=""> Your Massege</label>
            <input type="text" placeholder='Writing ...'  onChange={e=>setMsg(e.target.value)}/>
            <button>Send</button>
        </form>
    </div>
  )
}

export default Chat
