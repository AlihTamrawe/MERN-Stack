import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [Author, setAuthor] = useState({})
    const { id } = useParams();
   
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' +id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>hi d</p>
            <p>Name: {Author.name}</p>
            <Link to={"/author/"+id+"/edit"} > Edit</Link>
        </div>
    )
}
    
export default Detail;

