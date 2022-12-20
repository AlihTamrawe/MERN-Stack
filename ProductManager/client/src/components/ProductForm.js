import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default (props) => {
    let navigate = useNavigate();
    const { initialtitle, initialprice,initialdescription, onSubmitProp } = props;
    //keep track of what is being typed via useState hook
    
    const [title, setTitle] = useState(initialtitle); 
    const [price, setPrice] = useState(initialprice);
    const [description, setDescription] = useState(initialdescription);

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
        onSubmitProp({title,price, description});

            return navigate("/");

    }
    //onChange to update firstName and lastName
    return (
        <div>
            <p>hi</p>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>

        </div>
    )
}
