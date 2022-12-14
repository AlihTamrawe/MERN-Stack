import './App.css';
import React from 'react'
import ApiPok from './components/ApiPok';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = (props) => { 
  return (
    <h1 style={{color: "red"}}>Home Component</h1>
  );
}
    
const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}
function App() {
  return (
    <div className="App">
      <h1>Welcome </h1>

     <p> <Link to={"/about"}>Go to About </Link></p> 
      <p><Link to={"/Api"}>Go to Api </Link></p>
      <p><Link to={"/"}>Go to Home </Link></p>


      <Routes>
            <Route path="/about" element={<About />} />

        <Route path="/" element={<Home />} />
        <Route path="/Api" element={<ApiPok />} />



      </Routes> 
      
    </div>
  );
}

export default App;
