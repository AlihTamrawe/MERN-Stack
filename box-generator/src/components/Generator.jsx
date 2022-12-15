import React , {useState} from 'react'
import Square from './Square';


const  Generator = () => {
    const [color,setcolor] = useState([]);
    const [width,setwidth] = useState([]);
    const [height,setheight] = useState([]);

    const [Albox,setAlbox] = useState([]);


  
    const handel = (e)=> {
      e.preventDefault();
      const newSqaure ={
        height:height,
        width:width,
        color:color
      }
      setAlbox([...Albox,newSqaure]);
     


    }

    const handeldelete =(i) =>{
      alert("delete")
      setAlbox(Albox.slice(Albox.indexOf(i)))

    }


  return (
    <div>
        <form  onSubmit={handel}>

           <div> <input type="text" placeholder='color' onChange={e =>setcolor(e.target.value)} /></div> 
           <div>   <input type="number" placeholder='height' onChange={e =>setheight(e.target.value)} /></div> 
           <div>  <input type="number" placeholder='width' onChange={e =>setwidth(e.target.value)} /></div> 

            <input type="submit" value="send"/>
            
            
        </form>
        {/* <Square box={}></Square> */}

        <div className='farm'>
            {Albox.map((item,i) =>              
            <div onClick={handeldelete} >
              <Square box={item} ></Square>
              </div>
              
            

)
              
            }
              
          
           
          

            </div>
    </div>
  )
}

export default Generator
