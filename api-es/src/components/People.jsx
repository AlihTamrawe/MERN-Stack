import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate} from "react-router-dom";
import {  useParams} from "react-router";

const  People =(props) => {
    const [ourrespeople,setOurrespeople]=useState([]);

    const [loaded,setLoaded]=useState(false);
    const [id, setid] = useState(1)
    const [person, setperson] = useState(0)
    const [kind, setkind] = useState("people")
    const {mid } =useParams();
    var x=0;

    const navigate = useNavigate();
    
    const setMyid =(i)=>{
        mid=i;
    }  






    useEffect(()=>{
        // axios.get("https://pokeapi.co/api/v2/pokemon")
        axios.get("https://swapi.dev/api/people")
        .then(pok =>{console.log(pok); setOurrespeople(pok.data.results);setLoaded(true); })
        .catch(err=>console.log(err))


        
    },[])   
  

    const handelSearch =(e)=>{
     e.preventDefault();

        if(x==0){
            setid(parseInt(mid))
        }
        console.log(isNaN(mid)  )
        
        const num = ourrespeople[id];
        console.log(num)
        console.log(id)

        setperson(num)
        setid(0)
        
   
        


    }


  return (
    <div>
    <h4>Luke</h4>    
            <select onChange={e=>setkind(e.target.value) } >        
    <option value={"people"}>people</option>

    </select>
    <input type="number" value={id}  onChange={e=>setid(e.target.value)} />
    <button onClick={handelSearch}>Search</button>

        
          <ul>
            <h1> Name :{person.name}</h1>
            <p>Height : {person.height}</p>
            <p>Mass : {person.mass}</p>
            <p>Hair color : {person.hair_color}</p>
            <p>Skin color : {person.skin_color}</p>

            

            
         </ul>
        

</div>
  )
}

export default People
