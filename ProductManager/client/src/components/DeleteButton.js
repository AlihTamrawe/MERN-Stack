import React from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

export default props => {
    const navigate = useNavigate()
    const { productid, successCallback } = props;
    
    const deleteProduct = e => {
        axios.delete(`http://localhost:8000/api/product/${productid}`)
            .then(res=>{
                successCallback();
                navigate("/");
            })
    }
    
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}