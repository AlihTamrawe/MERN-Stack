import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from './components/PersonForm';
export default () => {
    const [ message, setMessage ] = useState("Loading...")
    const [ box, setBox ] = useState([])

    useEffect(()=>{
        axios.get( "http://localhost:8000/api")
            .then(res=>{setMessage(res.data.message);  })  
            axios.get( "http://localhost:8000/api/people/all")
            .then(res=>{setBox(res.data.persons);  })       
    }, []);
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
            <h2>people from the backend: </h2>

            {box.map((p,i)=>
            <div>
            <p> {i} first :{p.firstName} last : {p.lastName}</p> 
            </div>
            )}
            

                <PersonForm  />
        </div>
    )
}