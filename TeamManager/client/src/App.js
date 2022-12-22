import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import React from 'react';
import {
  Routes,
  Route,
  Link,useNavigate
} from "react-router-dom";
import Update from './views/Update'
import CreateTeam from './views/CreateTeam';
import TeamList from './components/TeamList';
import Status from './views/Status';
import Game from './components/Game';
function App() {
    const navigate = useNavigate()
    // navigate('/player/list/')
  return (
    <div className="App">

        <h1>Favorite teams</h1>
        <h1><span><Link to="/player/list">Manage Players</Link></span><hr/><span><Link to="/status/game">Manage Player Status</Link></span> </h1>
   

      <Routes>
      <Route path="/player/list" element={ <Main />} />
      <Route path="/create" element={ <CreateTeam />} />
      <Route path="/list" element={ <TeamList  />} />
     
      <Route path="/team/:id/edit" element={ <Update />} />
      <Route  path="/team/:id" element={<Detail/>} /> 
      <Route path='/status/game' element={<Status/>}/>
      <Route path='/Game/:id' element={<Game />}/>
    </Routes>

    </div>
  );
}

export default App;
