import React, { useEffect, useState } from 'react'
    import axios from 'axios'
import { Link,Route,Routes } from 'react-router-dom';
import TeamList from '../components/TeamList';


const Main = (props) => {
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
           <Link to="/create">Add some players</Link>
           <hr/>
           <Link to="/list/">List</Link>
           
           </div>

           {loaded && <TeamList  />}

           
        </div>
    )
}
    
export default Main;

