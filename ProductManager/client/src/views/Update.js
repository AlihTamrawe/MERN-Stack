import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import ProductForm from '../components/ProductForm';

    
const Update = (props) => {
    let navigate = useNavigate();

    const { id } = useParams();
    const [product, setproduct] = useState({});
    
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setproduct(res.data);
                setLoaded(true)
                console.log(product.title)

            })
    }, [])
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => console.log(res));
    }
    
    
    return (
        <div>
            <h1>Update this Product</h1>
            {/* <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="lastName"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label> Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setdescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form> */}
                    {loaded && <ProductForm onSubmitProp={updateProduct} initialdescription={product.description} initialprice={product.price} initialtitle={product.title}></ProductForm>}

        </div>
    )
}
    
export default Update;

