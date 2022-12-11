import './App.css';
import Generator from './components/Generator';
import Square from './components/Square';

function App() {
const mycolors =["red","black"];
  return (
    <div className="App">
      <Generator></Generator>
      <div className='farm' >
   
           
              {mycolors.map((item,i) =>{              
            <Square colore={item}></Square>
})}
        </div>

    </div>
  );
}

export default App;
