import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default (props) => {
    let navigate = useNavigate();
    const { initialname, onSubmitProp } = props;
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

            return navigate("/");

    }
    //onChange to update firstName and lastName
    return (
        <div>
            <p>hi</p>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setname(e.target.value)} value={name}/>
            </p>
         
            <input type="submit"/>
        </form>

        </div>
    )
}
