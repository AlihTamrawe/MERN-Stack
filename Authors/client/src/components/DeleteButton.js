import React from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

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
        <Button variant="contained"onClick={deleteAuthor}>
            Delete
        </Button>
    )
}