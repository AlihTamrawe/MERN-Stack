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


const TeamList = (props) => {
    const navigate = useNavigate()
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/team')
            .then(res => setTeams(res.data));
    }, [])
    const removeFromDom = teamid => {
    setTeams(teams.filter(team => team._id != teamid))
    }

    const moveToEdit = (id,e) =>{
        console.log("hi")
        e.preventDefault();

        return navigate(`/team/${id}/edit`);
    }
    return (
        <div>

<div>
           <Link to="/create">Add some players</Link>
           <hr/>
           <Link to="/list/">List</Link>
           
           </div>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>team Name</TableCell>
            <TableCell align="center" >prefered Position</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((tea,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link to={`/team/${tea._id}`}>
                        {tea.nameTeam}
                    </Link>
              </TableCell>
              <TableCell component="th" scope="row">
             <p>
                        {tea.position}
                   </p>
              </TableCell>
              <TableCell component="th" scope="row">
              <DeleteButton  teamid={tea._id} successCallback={() => removeFromDom(tea._id)} />
                    </TableCell>
              <TableCell component="th" scope="row">
              <Button    variant="contained" onClick={e=>moveToEdit(tea._id,e)}>Edit</Button>
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            {/* <table>
                <tbody>
                    <tr>
                        <td> team Name</td>
                        <td> action</td>
                    </tr>
                </tbody>
            {props.team.map((team, idx) => {
                return <tbody>
                    <tr>
                        <td>
 <p key={idx}>
                    
                    <Link to={"/team/" + team._id}>
                        {team.name}
                    </Link>  </p>
                    </td>
                    <hr/>
                    <td>
                    <DeleteButton teamid={team._id} successCallback={() => removeFromDom(team._id)} />
                    
                    <button onClick={e=>moveToEdit(team._id,e)}>Edit</button>
                    </td>
              |</tr>
                </tbody>
            })}
            </table> */}
        </div>
    )
}
    
export default TeamList;



