import React, { useEffect, useState } from 'react'
    import axios from 'axios'
import { Link,Route,Routes } from 'react-router-dom';
import TeamList from '../components/TeamList';


const Status = (props) => {
    const [Teams, setTeams] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/team')
            .then(res=>{
                setTeams(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[Teams]);
    
    const removeFromDom = authorid => {
        setTeams(Teams.filter(author => author._id != authorid));
    }
    // const removeFromDom = personId => {
    //     setAuthors(Authors.filter(pr => pr._id != prId));
    // }


    return (
        <div>
            <div>
           <Link to="/Game/1">Game1</Link>
          |
           <Link to="/Game/2">Game2</Link>
          |
           <Link to="/Game/3">Game3</Link>

           </div>


           
        </div>
    )
}
    
export default Status;

