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

    const [confirms ,setconfirm] = useState("");
    const [confirmsError ,setconfirmsError] = useState("");

    var flag = false;


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,confirmpassword };
                console.log("Welcome", newUser);
                

    };
    const handleconfirm =(e)=> {
        if(firstnameError==""&&lastnameError==""&&emailError==""&&passwordError==""&&confirmpasswordError==""){
            setconfirmsError("Ready submission");

        }
        else
        {
            setconfirmsError(" Not Ready submission");

        }
    }
    

    const handlefirstname = (e) => {
        setfirstname(e.target.value);
        if(e.target.value.length < 1) {
            setfirstnameError("firstname is required!");
            flag=false;

        } else if(e.target.value.length < 2) {
            setfirstnameError("firstname must be 2 characters or longer!");
                        flag=false;
        } else {
            setfirstnameError("");
            flag=true;
        }
    }
    const handlelastname = (e) => {
        setlastname(e.target.value);
        if(e.target.value.length < 1) {
            setlastnameError("lasttname is required!");
            flag=false;

        } else if(e.target.value.length < 4) {
            setlastnameError("lasttname must be 4 characters or longer!");
            flag=false;

        } else {
            setlastnameError("");
            flag=true;

        }
    }
    const handleEmail= (e) => {
        setEmail(e.target.value);
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test( e.target.value) ) {
            setemailError( "Please enter a valid email address");
            flag=false;

        }else
        if(e.target.value.length < 1) {
            setemailError("email is required!");
            flag=false;

        } else if(e.target.value.length < 7) {
            setemailError("email must be 7 characters or longer!");
            flag=false;

        } else {
            setemailError("");
            flag=true;

        }
    }

    const handlepassword= (e) => {
        setpassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("password is required!");
            flag=false;

        } else if(e.target.value.length < 8) {
            setpasswordError("password must be 8 characters or longer!");
            flag=false;

        } else {
            setpasswordError("");
            flag=true;

        }
    }

    const handleconpassword= (e) => {
        setConfirmpassword(e.target.value);
        
        if(e.target.value.length < 1) {
            setconfirmpasswordError("password is required!");
            flag=false;

        } else if(e.target.value!=password) {
            setconfirmpasswordError("Confirm your password as Same");
            flag=false;

        }else if(e.target.value.length < 8){
            setconfirmpasswordError("confirm must be 8 characters or longer!");
            flag=false;

        } 
        else {
            setconfirmpasswordError("");
            flag=true;
        }
    }


    return (
        <div>
             
                    <p style={{color:'red'}}>{ confirmsError }</p> :
                  

            <form style={{border:"solid 2px gray"}} onSubmit={ createUser }>
                <div  >
                    <label>Firstname: </label> 
                    <input type="text" onChange={ handlefirstname } value={ firstname } />
                    {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
                </div>
                <div >
                    <label>Lastname: </label> 
                    <input type="text" onChange={ handlelastname }  value={ lastname } />
                    {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
                </div>
                <div >
                    <label>Email Address: </label> 
                    <input type="text" onChange={handleEmail }  value={email} />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
                </div >
                <div >
                    <label>Password: </label>
                    <input type="password" onChange={ handlepassword }   value={password} />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                </div>
                <div >
                    <label>Confirm  Password: </label>
                    <input type="password" onChange={ handleconpassword }    value={confirmpassword} />
                    {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
                </div>
                <input type="submit" value="Create User" onClick={handleconfirm} />
            </form>

            <div >
                <h2>Name :{firstname} , {lastname}</h2>
                <p>Email : {email}</p>
                <p>password :{password}</p>
                <p>confirmpassword :{confirmpassword}</p>
                {
                    confirms ?
                    <p style={{color:'red'}}>{ confirmsError }</p> :
                    ''
                }
            </div>
        </div>
    )
}
export default Hook;