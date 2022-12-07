import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

const divstyle = {
  padding: '12px 15px',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
  color: '#b4a7d6',
  border: 'none',
 margin:'2px',
  width:'150px',
  height:'250px'


};

function App() {
  return (
    <div className="App">
        <Header />
        <Navigation />
        <Main>
       
            <SubContents />
            <SubContents />
            <SubContents />
            
            <Advertisement />
        </Main>
    </div>
  );
}

export default App;
