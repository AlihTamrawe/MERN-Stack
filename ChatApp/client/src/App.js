import './App.css';
import io from 'socket.io-client'
import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Link,useNavigate
} from "react-router-dom";
import JoinRoom from './components/JoinRoom';
import Chat from './components/Chat';

function App() {
    const navigate = useNavigate()
    // navigate('/player/list/')

  const [socket] = useState(() => io(':8000'));
  const [user ,setUser] =useState('')
  useEffect (() => {
    socket.on("welcome")
  })
  return (
    <div className="App">

        <h1>Chat Application </h1>

       
      <div>

        { !user ?<JoinRoom myfun={setUser}/>:<Chat user={user}/>} 
          

      </div>
    </div>
  );
}

export default App;
