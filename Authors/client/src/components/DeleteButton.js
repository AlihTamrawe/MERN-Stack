import React from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

export default props => {
    const navigate = useNavigate()
    const { authorid, successCallback } = props;
    
    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/author/${authorid}`)
            .then(res=>{
                successCallback();
                navigate("/");
            })
    }
    
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}