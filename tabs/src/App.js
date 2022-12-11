import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import Displaytab from './components/Displaytab';
import { useState } from 'react';

function App() {
  const [ta,setTa] = useState("");

  return (
    <div className="App">
      <div className='flee'>
     <Tabs num={1} mfun={setTa}></Tabs>
     <Tabs num={2} mfun={setTa}></Tabs>
     <Tabs num={6} mfun={setTa}></Tabs>
      <Displaytab  num={ta}></Displaytab>

     </div>

    </div>
  );
}

export default App;
