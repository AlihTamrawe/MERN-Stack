import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import TeamForm from '../components/TeamForm';
import CancelButton from '../components/CancelButton';

    
const Update = (props) => {
    let navigate = useNavigate();

    const { id } = useParams();
    const [team, setTeam] = useState({});
    
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/team/' + id)
            .then(res => {
                setTeam(res.data);
                setLoaded(true)
                console.log(team.nameTeam)

            })
    }, [])
    const updateteam = team => {
        axios.put('http://localhost:8000/api/team/' + id, team)
            .then(res => console.log(res))
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
            <h2>Update this team</h2>
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
                    {loaded && <TeamForm onSubmitProp={updateteam} initialname={team.nameTeam} initialposition={team.position} errorsfromcreat={errors}></TeamForm>}
                    <CancelButton/>

        </div>
    )
}
    
export default Update;

