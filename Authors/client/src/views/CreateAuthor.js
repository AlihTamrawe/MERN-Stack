import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm';

import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import CancelButton from '../components/CancelButton';

const Createauthor =() => {
    const [authors, setauthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
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
    }
  return (
    <div>
        <h2>Create New Author</h2>
        <AuthorForm onSubmitProp={createauthor} initialname="" ></AuthorForm>
        <CancelButton></CancelButton>
    </div>
  )
}

export default Createauthor
