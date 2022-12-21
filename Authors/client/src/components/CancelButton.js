import React from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

export default props => {
    const navigate = useNavigate()
    
    const cancelAuthor = e => {
        e.preventDefault();

                navigate("/");
            }
    
    
    return (
        <button onClick={e=>cancelAuthor(e)}>
            Cancel
        </button>
    )
}