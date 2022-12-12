import React , {useState} from 'react'
import Square from './Square';

const  Generator = () => {
    const [sqaure,setsquare] = useState("");
    const [allsqaure,setAllsquare] = useState([]);
    const arr = [];

    const handel = (e)=> {
      e.preventDefault();
      console.log(e)
      arr.push(sqaure);
      setAllsquare([...allsqaure,sqaure]);
     allsqaure.map(item=>console.log(item));


    }



  return (
    <div>
        <form  onSubmit={handel}>
            <input type="text" onChange={e =>setsquare(e.target.value)} />
            <input type="submit" value="send"/>
            
            
        </form>
        <Square colore={sqaure}></Square>

        <div className='farm'>
            {allsqaure.map((item) =>              
            
              <Square colore={item}></Square>
        
            

)
              
            }
              
          
           
          

            </div>
    </div>
  )
}

export default Generator
