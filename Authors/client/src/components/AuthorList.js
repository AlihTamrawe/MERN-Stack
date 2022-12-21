import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const navigate = useNavigate()
    const [authors, setauthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setauthors(res.data));
    }, [])
    const removeFromDom = authorid => {
    setauthors(authors.filter(author => author._id != authorid))
    }
    return (
        <div>
            {props.author.map((author, idx) => {
                return <p key={idx}>
                    <Link to={"/author/" + author._id}>
                        {author.name}
                    </Link>
                    |
                    <DeleteButton authorid={author._id} successCallback={() => removeFromDom(author._id)} />
                </p>
            })}
        </div>
    )
}
    
export default AuthorList;



