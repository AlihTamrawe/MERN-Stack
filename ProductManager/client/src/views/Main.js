import React, { useEffect, useState } from 'react'
    import axios from 'axios'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


const Main = (props) => {
    const [products, setproducts] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setproducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[products]);
    

    // const removeFromDom = personId => {
    //     setproducts(products.filter(pr => pr._id != prId));
    // }


    return (
        <div>

           <ProductForm/>
           <hr/>
           {loaded && <ProductList product={products} />}
        </div>
    )
}
    
export default Main;

