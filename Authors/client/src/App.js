import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Update from './views/Update'
import CreateProduct from './views/CreateAuthor';
function App() {
  return (
    <div className="App">

        <h1>Favorite authors</h1>
        <p> <Link to="/">home</Link></p>
   

      <Routes>
      <Route path="/" element={ <Main />} />
      <Route path="/create" element={ <CreateProduct />} />

      <Route path="/author/:id/edit" element={ <Update />} />
      <Route  path="/author/:id" element={<Detail/>} /> 

    </Routes>

    </div>
  );
}

export default App;
