import React, { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
 
 
  return (
    <div>
        { count }
            <button onClick={ handleClick }>Click Me</button>
    </div>
  )
}

