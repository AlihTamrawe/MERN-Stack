import React,{useState} from 'react'
import Display1 from './Display1';

const Form1 =(props)=> {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [Age,setAge] = useState(0);
    const [ischeck,setcheck] = useState(false);

    const handelForm =(e) =>{
        setName(e.target.value);

        e.preventDefault();
        props.myfun(name);
        console.log(name + ischeck ? "no":" yes");
    }

  return (
    <div>
        <h1>Welcome to the </h1>
        <form onSubmit={handelForm}>
            <p> Name <input type="text" onChange={e => setName(e.target.value) }/></p>
            <p> email <input type="text"/></p>
            <p> Age <input type="text"/></p>
            <input type="checkbox" onChange={e =>{setcheck(true)}}></input>
            <input type="submit" value="send form"/>
            {/* <Display1 txt={name}></Display1> */}

        </form>
      
    </div>
  )
}

export default Form1
