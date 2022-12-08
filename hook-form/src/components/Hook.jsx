import React, { useState } from  'react';

const  Hook = (props) =>{
    const [firstname ,setfirstname] = useState("");
    const [lastname ,setlastname] = useState("");

    const [email ,setEmail] = useState("");
    const [password ,setpassword] = useState("");
    const [confirmpassword ,setConfirmpassword] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,confirmpassword };
                console.log("Welcome", newUser);
    };


    return (
        <div>
            <form style={{border:"solid 2px gray"}} onSubmit={ createUser }>
                <div className='formhook' >
                    <label>Firstname: </label> 
                    <input type="text" onChange={ (e) => setfirstname(e.target.value) } value={ firstname } />
                </div>
                <div className='formhook'>
                    <label>Lastname: </label> 
                    <input type="text" onChange={ (e) => setlastname(e.target.value) } value={ lastname } />
                </div>
                <div className='formhook'>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email} />
                </div >
                <div className='formhook'>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setpassword(e.target.value) } value={password} />
                </div>
                <div className='formhook'>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setConfirmpassword(e.target.value) } value={confirmpassword} />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div >
                <h2>Name :{firstname} , {lastname}</h2>
                <p>Email : {email}</p>
                <p>password :{password}</p>
                <p>confirmpassword :{confirmpassword}</p>
            </div>
        </div>
    )
}
export default Hook;