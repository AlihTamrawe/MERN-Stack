import React from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default props => {
    const navigate = useNavigate()
    
    const cancelAuthor = e => {
        e.preventDefault();

                navigate("/player/list");
            }
    
    
    return (
        <div>
        <Button variant="contained"onClick={e=>cancelAuthor(e)}>
            Cancel
        </Button>
        </div>
    )
}