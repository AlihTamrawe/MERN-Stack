import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export default (props) => {
    const { initialnameTeam,initialposition, onSubmitProp,errorsfromcreat } = props;
    //keep track of what is being typed via useState hook
    
    const [nameTeam, setNameTeam] = useState(initialnameTeam); 
    const [position, setposition] = useState(initialposition); 


    //handler when the form is submitted
    const onSubmitHandler = e => {
        
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        // axios.post('http://localhost:8000/api/product/new', {
        //     title,
        //     price,
        //     description
        // })
        //     .then(res=>{console.log(res);setTitle("");})
        //     .catch(err=>console.log(err))
        onSubmitProp({nameTeam,position});
        
            

    }
    //onChange to update 
    return (
        <div>
            <p>Form</p>
        <form onSubmit={onSubmitHandler}>
        { 
           errorsfromcreat.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Team Name</label><br/>
                <TextField
          id="outlined-required"
          label="Required"
          defaultValue="xxxxx" onChange={(e)=>setNameTeam(e.target.value)} value={nameTeam}/>
            </p>
            <p>
                <label>Position Prefered</label><br/>
                <TextField
          id="outlined-required"
          label="Required"
          defaultValue="Forword" onChange={(e)=>setposition(e.target.value)} value={position}/>
            </p>
         
            <Button variant="contained" type='submit' >submit</Button>
        </form>

        </div>
    )
}
