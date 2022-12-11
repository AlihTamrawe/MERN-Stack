import React , {useState}from 'react'

const MyMap =()=> {
    const {fstate,setFstate}= useState(0);

    const arrs = ["java","c++","python","kali"];
    const myfun = (i)=>{
        alert(i);
    }
    return (
    <div>
        <ul>
        {arrs.map((item,i) => <p key={i} onClick={e=> myfun(i)}>{item}</p>)}
        </ul>
    </div>
    )
}

export default MyMap
