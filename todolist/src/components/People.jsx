import React,{useEffect,useState} from 'react'

export default  ()=> {
    const [people,setPeople] =useState([])
    const [y,sety]=useState(false)

    useEffect(() =>{
        fetch('https://swapi.dev/api/people')
        .then(response => {
            setPeople(response);
            alert("aaaa");
            return response.json();
        }).then(response => {
                setPeople(response);
                sety(true   )
            console.log(response.results);
        }).catch(err=>{
            console.log(err);
        }) 
    } ,[y])

  return (
    <div>
        <p>{people.length}</p>
    </div>
  )
  }

