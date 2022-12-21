import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export default (props) => {
    const { initialname, onSubmitProp,errorsfromcreat } = props;
    //keep track of what is being typed via useState hook
    
    const [name, setname] = useState(initialname); 
 

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
        onSubmitProp({name});
        
            

    }
    //onChange to update 
    return (
        <div>
            <p>Form</p>
        <form onSubmit={onSubmitHandler}>
        { 
           errorsfromcreat.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label><br/>
                <TextField
          id="outlined-required"
          label="Required"
          defaultValue="Hello World" onChange={(e)=>setname(e.target.value)} value={name}/>
            </p>
         
            <Button variant="contained" type='submit' >submit</Button>
        </form>

        </div>
    )
}
