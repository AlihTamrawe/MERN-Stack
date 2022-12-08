import React, { useState } from  'react';

const  Hook = (props) =>{
    const [firstname ,setfirstname] = useState("");
    const [firstnameError ,setfirstnameError] = useState("");

    const [lastname ,setlastname] = useState("");
    const [lastnameError ,setlastnameError] = useState("");


    const [email ,setEmail] = useState("");
    const [emailError ,setemailError] = useState("");

    const [password ,setpassword] = useState("");
    const [passwordError ,setpasswordError] = useState("");

    const [confirmpassword ,setConfirmpassword] = useState("");
    const [confirmpasswordError ,setconfirmpasswordError] = useState("");



    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,confirmpassword };
                console.log("Welcome", newUser);
    };

    const handlefirstname = (e) => {
        setfirstname(e.target.value);
        if(e.target.value.length < 1) {
            setfirstnameError("firstname is required!");
        } else if(e.target.value.length < 2) {
            setfirstnameError("firstname must be 2 characters or longer!");
        } else {
            setfirstnameError("");
        }
    }
    const handlelastname = (e) => {
        setlastname(e.target.value);
        if(e.target.value.length < 1) {
            setlastnameError("lasttname is required!");
        } else if(e.target.value.length < 4) {
            setlastnameError("lasttname must be 4 characters or longer!");
        } else {
            setlastnameError("");
        }
    }
    const handleEmail= (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("email is required!");
        } else if(e.target.value.length < 7) {
            setemailError("email must be 7 characters or longer!");
        } else {
            setemailError("");
        }
    }

    const handlepassword= (e) => {
        setpassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("password is required!");
        } else if(e.target.value.length <= 8) {
            setpasswordError("password must be 8 characters or longer!");
        } else {
            setpasswordError("");
        }
    }

    const handleconpassword= (e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value==password) {
            setconfirmpasswordError("Confirm your password as Same");
        }else if(e.target.value.length <= 8){
            setconfirmpasswordError("confirm must be 8 characters or longer!");

        } 
         else {
            setconfirmpasswordError("");
        }
    }


    return (
        <div>
            <form style={{border:"solid 2px gray"}} onSubmit={ createUser }>
                <div  >
                    <label>Firstname: </label> 
                    <input type="text" onChange={ (e) => setfirstname(e.target.value)  } onKeyDown={handlefirstname} value={ firstname } />
                    {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
                </div>
                <div >
                    <label>Lastname: </label> 
                    <input type="text" onChange={ (e) => setlastname(e.target.value) }  onKeyDown={handlelastname} value={ lastname } />
                    {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
                </div>
                <div >
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } onKeyDown={handleEmail} value={email} />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
                </div >
                <div >
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setpassword(e.target.value) }  onKeyDown={handlepassword} value={password} />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                </div>
                <div >
                    <label>Confirm  Password: </label>
                    <input type="password" onChange={ (e) => setConfirmpassword(e.target.value)   }   onKeyDown={handleconpassword} value={confirmpassword} />
                    {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
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