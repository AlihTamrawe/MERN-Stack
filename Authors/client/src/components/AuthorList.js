import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


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



<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Author Name</TableCell>
            <TableCell align="right">Calories</TableCell>
           \
          </TableRow>
        </TableHead>
        <TableBody>
          {props.author.map((auth,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link to={`/author/${auth._id}`}>
                        {auth.name}
                    </Link>
              </TableCell>
              <TableCell component="th" scope="row">
              <DeleteButton authorid={auth._id} successCallback={() => removeFromDom(auth._id)} />
                    </TableCell>
              <TableCell component="th" scope="row">
              <Button variant="contained" onClick={e=>moveToEdit(auth._id,e)}>Edit</Button>
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            {/* <table>
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
            </table> */}
        </div>
    )
}
    
export default AuthorList;



