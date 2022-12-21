import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm';

import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import CancelButton from '../components/CancelButton';

const Createauthor =() => {
    let navigate = useNavigate();

    const [authors, setauthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState(['']); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res =>{ 
                setauthors(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = authorid => {
        setauthors(authors.filter(author => author._id != authorid));
    }
    const createauthor = author => {
        axios.post('http://localhost:8000/api/author/new', author)
            .then(res=>{
                setauthors([...authors, res.data]);
            })
            .then(()=> navigate('/'))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
    }
  return (
    <div>
        <h2>Create New Author</h2>
        <AuthorForm onSubmitProp={createauthor} initialname="" errorsfromcreat={errors} ></AuthorForm>
        <CancelButton></CancelButton>
    </div>
  )
}

export default Createauthor
