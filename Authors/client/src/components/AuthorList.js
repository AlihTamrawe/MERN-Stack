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

    const moveToEdit = (id,e) =>{
        console.log("hi")
        e.preventDefault();

        return navigate(`/author/${id}/edit`);
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td> Author Name</td>
                        <td> action</td>
                    </tr>
                </tbody>
            {props.author.map((author, idx) => {
                return <tbody>
                    <tr>
                        <td>
 <p key={idx}>
                    
                    <Link to={"/author/" + author._id}>
                        {author.name}
                    </Link>  </p>
                    </td>
                    <hr/>
                    <td>
                    <DeleteButton authorid={author._id} successCallback={() => removeFromDom(author._id)} />
                    
                    <button onClick={e=>moveToEdit(author._id,e)}>Edit</button>
                    </td>
              |</tr>
                </tbody>
            })}
            </table>
        </div>
    )
}
    
export default AuthorList;



