import React, { useEffect, useState } from 'react'
import TeamForm from '../components/TeamForm';

import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import CancelButton from '../components/CancelButton';

const CreateTeams =() => {
    let navigate = useNavigate();

    const [Teams, setTeams] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState(['']); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/team')
            .then(res =>{ 
                setTeams(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = teamid => {
        setTeams(Teams.filter(team => team._id != teamid));
    }
    const createTeam = team => {
        axios.post('http://localhost:8000/api/team/new', team)
            .then(res=>{
                setTeams([...Teams, res.data]);
            })
            .then(()=> navigate('/player/list'))
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
        <h2>Create New team</h2>
        <TeamForm onSubmitProp={createTeam} initialnameTeam=""  initialposition="" errorsfromcreat={errors} ></TeamForm>
        <CancelButton></CancelButton>
    </div>
  )
}

export default CreateTeams
