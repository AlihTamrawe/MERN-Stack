import React,{useState,useEffect} from 'react'
import axios from 'axios'

const  ApiPok =()=> {
    const [ourres,setOurres]=useState([]);
    const [loaded,setLoaded]=useState(false
        );



    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(pok =>{console.log(pok); setOurres(pok.data.results);setLoaded(true)})
        .catch(err=>console.log(err))
    },[])

  return (


    <div>
        <h4>Fetch Pokemon</h4>
                <ul>

        {loaded && ourres.map( pok => 
        <li><p>{pok.name}</p></li>
        )}
              </ul>

    </div>
  )
}

export default ApiPok
