import './App.css';
import Display1 from './components/Display1';
import Form1 from './components/Form1';
import MyMap from './components/MyMap';
import  {useState} from 'react'


function App() {
  const [msg,setMsg] = useState("");


  return (
    <div className="App">
      <MyMap > </MyMap>

      <Form1 myfun ={setMsg}></Form1>
      <Display1 txt={msg}></Display1>
    </div>
  );
}

export default App;
