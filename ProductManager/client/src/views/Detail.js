import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setproduct] = useState({})
    const { id } = useParams();
    const p ="/product/"+id+"/edit"
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setproduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>hi d</p>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={p} > Edit</Link>
        </div>
    )
}
    
export default Detail;

