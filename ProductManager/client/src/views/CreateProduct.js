import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';

import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";

const CreateProduct =() => {
    const [products, setproducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res =>{ 
                setproducts(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = productid => {
        setproducts(products.filter(product => product._id != productid));
    }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/product/new', product)
            .then(res=>{
                setproducts([...products, res.data]);
            })
    }
  return (
    <div>
        <ProductForm onSubmitProp={createProduct} initialdescription="" initialprice={0} initialtitle=""></ProductForm>
    </div>
  )
}

export default CreateProduct
