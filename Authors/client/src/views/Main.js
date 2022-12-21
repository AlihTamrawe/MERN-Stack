import React, { useEffect, useState } from 'react'
    import axios from 'axios'
import authorList from '../components/AuthorList';
import { Link } from 'react-router-dom';
import AuthorList from '../components/AuthorList';


const Main = (props) => {
    const [Authors, setAuthors] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[Authors]);
    
    const removeFromDom = authorid => {
        setAuthors(Authors.filter(author => author._id != authorid));
    }
    // const removeFromDom = personId => {
    //     setAuthors(Authors.filter(pr => pr._id != prId));
    // }


    return (
        <div>
           
           <Link to="/create">Add some Authors</Link>
           <hr/>
            <div>
           <p>we have qoutes by:</p>
           </div>
           {loaded && <AuthorList author={Authors} />}
        </div>
    )
}
    
export default Main;

