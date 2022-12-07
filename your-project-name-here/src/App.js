import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Mydiv from './components/Mydiv';

function App() {
  const firstname = "ali";
  return (
    <div className='App'>

      
      <Header firstName="ali" lastName="hussam" age={28} hairColor="Red">
        <p>will</p>
      </Header>
      <Header firstName="ali" lastName="hussam" age={26} hairColor="Red"/>

      <Header firstName="ali" lastName="hussam" age={26} hairColor="Red"/>

      <Header firstName="ali" lastName="hussam" age={26} hairColor="Red"/>
  


<h1>HELLO DOJO </h1>
<h3>Things I need to do</h3>
<ul>
  <li> Learn React   </li>
  <li> Climb Mt.  Everest </li>

  <li > Run a marathon  </li>
  <li> Feed the dogs  </li>

</ul>
<script>
let x =prompt("Please enter your name", "Harry Potter");
;
</script>

    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <div>
    //       <h1 > hallo {firstname}  </h1>
    //       <form>
    //         <input type={"text"}/>
    //       </form>

    //     </div>
    //     <>                
    //             <h2>Hello World</h2>                
    //             <p>This is a paragraph</p>            
    //         </>     
        
    //   </header>
      
    // </div>
  );
  
}

export default App;
