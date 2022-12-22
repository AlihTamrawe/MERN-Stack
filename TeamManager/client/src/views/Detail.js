import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [Team, setTeam] = useState({})
    const { id } = useParams();
   
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/team/' +id)
            .then(res => setTeam(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>hi d</p>
            <p>Team Name : {Team.nameTeam}</p>
            <p>position Prefered : {Team.nameTeam}</p>

            <Link to={"/team/"+id+"/edit"} > Edit</Link>
        </div>
    )
}
    
export default Detail;

