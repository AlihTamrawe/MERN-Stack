import logo from './logo.svg';
import './App.css';
import Userref from './components/Userref';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
    {/* <Userref>
      </Userref> */}

      <PersonCard firstName="ali" lastName="Tamrawe" age={26} hairColor="Black-gold"></PersonCard>

      <PersonCard firstName="ahmad" lastName="badad" age={32} hairColor="Black"></PersonCard>

      <PersonCard firstName="yazan" lastName="jamahnneh" age={26} hairColor="orange"></PersonCard>

      <PersonCard firstName="moe" lastName="terrawee" age={26} hairColor="Browan"></PersonCard>

    </div>
  );
}

export default App;
