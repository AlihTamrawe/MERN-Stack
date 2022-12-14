import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams} from "react-router-dom";

const  ApiPok =(props)=> {
  
    const [ourresstarships,setOurresstarships]=useState([]);
    const [ourrespeople,setOurrespeople]=useState([]);
    const [ourresplantes,setOurresplantes]=useState([]);
    const {mid} = useParams(0)
    const kinds =props.kind
    const [loaded,setLoaded]=useState(false);
    const [id, setid] = useState(0)
    const [person, setperson] = useState(0)
    const [kind, setkind] = useState("starships")


    const navigate = useNavigate();
    
   






    useEffect(()=>{
        // axios.get("https://pokeapi.co/api/v2/pokemon")
        axios.get("https://swapi.dev/api/people")
        .then(pok =>{console.log(pok); setOurrespeople(pok.data.results);setLoaded(true)})
        .catch(err=>console.log(err))
        axios.get("https://swapi.dev/api/starships")
        .then(pok =>{console.log(pok); setOurresstarships(pok.data.results);setLoaded(true)})
        .catch(err=>console.log(err))
        axios.get("https://swapi.dev/api/planets")
        .then(pok =>{console.log(pok); setOurresplantes(pok.data.results);setLoaded(true)})
        .catch(err=>console.log(err))

        
    },[])
  

    const handelSearch =(e)=>{
      e.preventDefault();
      // if(kinds!=null){
      //   const num = ourrespeople[mid];
      //   console.log(num.name)
      //   setperson(num)
      // }
      // else
      if(kind=="planets"){
        const num = ourresplantes[id];
        console.log(num.name)
        setperson(num)

      }
      if(kind=="people"){
        
        const num = ourrespeople[id];
        console.log(num.name)
        setperson(num)
        navigate("/people/"+id);
      }
      if(kind=="starships"){
        const num = ourresstarships[id];
        console.log(num.name)
        setperson(num)
        

      }
     


    }


  return (


    <div>
        <h4>Fetch Pokemon</h4>    
                <select onChange={e=>setkind(e.target.value) } >        
        <option value={"starships"}>starships</option>
        <option value={"planets"}>planets</option>
        <option value={"people"}>people</option>

        </select>
        <input type="number"  onChange={e=>setid(e.target.value)} />
        <button onClick={handelSearch}>Search</button>

              { kind=="people" ? 
              <ul>
                <h1> Name :{person.name}</h1>
                <p>Height : {person.height}</p>
                <p>Mass : {person.mass}</p>
                <p>Hair color : {person.hair_color}</p>
                <p>Skin color : {person.skin_color}</p>

                

                
             </ul>
             :kind=="planets"? 
              <ul>
              <h1> Name :{person.name}</h1>

              <p>climate : {person.climate}</p>
              <p>terrain : {person.terrain}</p>
              <p>diameter : {person.diameter}</p>

              
              </ul>
               :
               <ul>
             
               <h1> Name :{person.name}</h1>
               <p>length : {person.model}</p>
               <p>manufacturer : {person.manufacturer}</p>
               <p>passengers : {person.passengers}</p>
               <p>consumables : {person.consumables}</p>

               
               
            </ul>
              }

    </div>
  )
}

export default ApiPok
