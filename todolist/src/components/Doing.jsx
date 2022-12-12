import React,{useState} from 'react'

function Doing(props) {

    const {items}=props;
    const [textdecoration,setTextDecoration] =useState("none")
    const [isclicked,setisclicked] =useState(false)

    const styles = {
        
        textDecoration: 'none'
     }
        
    var flag= false;

    const  handelcheckB =(event)=>{
      if (event.target.checked) {
        console.log('✅ Checkbox is checked');
        setTextDecoration('line-through');

      } else {
        console.log('⛔️ Checkbox is NOT checked');
        setTextDecoration('');
        }
       


        
      

    }
   
   
 
  return (
    <div >
    <p style={{textDecoration:textdecoration}} > {items}</p>
    <input type="checkbox"   onChange={e=>handelcheckB(e)}  />
    
    </div>
  )
}

export default Doing
