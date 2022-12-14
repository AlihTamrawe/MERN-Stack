import './App.css';
import React from 'react'
import ApiPok from './components/ApiPok';
import {
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import People from './components/People';
import Planets from './components/Planets';


const Home = (props) => { 
  const va=useParams()
  console.log(va.x)

  return (
    <div>
    <h1 style={{color: "red"}}>Home Component </h1>
    {isNaN(va.x)?<p>word -{va.x}</p>: <p> Num {va.x}</p>}
    </div>
  );
}
    
const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}
function App(props) {
  return (
    <div className="App">
     
      <h1>Welcome </h1>


     <p> <Link to={"/about"}>Go to About </Link></p> 
      <p><Link to={"/"}>Go to Api </Link></p>
      <p><Link to={"/home"}>Go to Home </Link></p>


      <Routes>
            <Route path="/about" element={<About />} />

        <Route path="/home/:x" element={<Home />} />
        <Route path="/home/" element={<Home />} />

        <Route path="/" element={<ApiPok />} />

        <Route path="/people/:id" element={<People/>} />
        {/* <Route path="/people/:id" element={<ApiPok kind="people"/>} /> */}

        <Route path="/planets/:id" element={<Planets/>} />




      </Routes> 
      
    </div>
  );
}

export default App;
