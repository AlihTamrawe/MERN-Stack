import React,{useState} from 'react'

function Doing(props) {

    const {items}=props;
    const [textdecoration,setTextDecoration] =useState("none")
    const styles = {
        
        textDecoration: 'none'
     }
        
    var flag= false;

    const  handelcheckB =()=>{
        if(!flag){
            setTextDecoration('none');
            flag=true;
            console.log(flag);
        }
        else{
            setTextDecoration('line-through');
            flag=false;
            console.log(flag);

        }

    }
  
 
  return (
    <div >
    <p style={{textDecoration:textdecoration}}> {items}</p>
    <input type="checkbox" onClick={handelcheckB}></input>
    </div>
  )
}

export default Doing
