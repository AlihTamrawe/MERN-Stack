import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

    
const Update = (props) => {
    let navigate = useNavigate();

    const { id } = useParams();
    const [author, setauthor] = useState({});
    
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setauthor(res.data);
                setLoaded(true)
                console.log(author.title)

            })
    }, [])
    const updateauthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res => console.log(res));
    }
    
    
    return (
        <div>
            <h1>Update this author</h1>
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
                    {loaded && <AuthorForm onSubmitProp={updateauthor} initialname={author.name} ></AuthorForm>}

        </div>
    )
}
    
export default Update;

