import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProducts(res.data));
    }, [])
    const removeFromDom = productid => {
    setProducts(products.filter(product => product._id != productid))
    }
    return (
        <div>
            {props.product.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/product/" + product._id}>
                        {product.title}
                    </Link>
                    |
                    <DeleteButton productid={product._id} successCallback={() => removeFromDom(product._id)} />
                </p>
            })}
        </div>
    )
}
    
export default ProductList;



