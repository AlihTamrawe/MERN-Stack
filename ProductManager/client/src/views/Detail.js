import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setproduct] = useState({})
    // const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +props.id)
            .then(res => setproduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>hi d</p>
            <p>Title: {product._id}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>

        </div>
    )
}
    
export default Detail;

