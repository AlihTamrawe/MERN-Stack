import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams} from "react-router-dom";
function AxiosAp() {

    const [poki,setPoki]=useState([""]);
    const [loaded,setLoaded]=useState(false);



    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
        // axios.get("https://swapi.dev/api/people")
        .then(pok =>{console.log(pok.data.results[0].name); setPoki(pok.data.results);setLoaded(true)})
        .catch(err=>console.log(err))
     

        
    },[])
  
  return (
    <div>
     <h1>all</h1>
        <ul>{poki.map((item)=>
            <p>{item.name} </p>
        )}
        
        </ul>
      
    </div>
  )
}

export default AxiosAp
