import './App.css';
import Mycounter from './components/Mycounter';

function App() {
  return (
    <div className="App">
      <Mycounter fname="ali" age={22} hair="blach"/>

      <Mycounter fname="moe jarrar" age={88} hair="gold brawon"/>

    
    </div>
  );
}

export default App;
