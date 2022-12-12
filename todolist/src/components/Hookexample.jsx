import React, { useState } from 'react';
import Doing from './Doing';
 
import useList from './List';
 
export default () => {
    const [val, setVal] = useState('');
    const { list, add ,remove} = useList([]);
 
    function handleSubmit(e) {
        e.preventDefault();

        add(val);
        setVal('');
    }
    function handleSubmitdeleted(e) {
        e.preventDefault();
        remove(e.target.value);
    }
 
    return (
        <>
           
            <input
                onChange={e => setVal(e.target.value)}
                value={val}
            />
            <button onClick={handleSubmit}>Add</button>

            {[...list].reverse().map((item) => 
           <div>
          
             <Doing items={item}/>
             <button type="submit" onClick={ handleSubmitdeleted }   > delete</button> 
            
             </div>     

        
            )}
        </>
    );
}    