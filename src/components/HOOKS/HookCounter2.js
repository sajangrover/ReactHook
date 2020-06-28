import React, {useState} from 'react'

function HookCounter2() {
    const intial = 0;
    const [count, setCount] =useState(intial);
    return (
        <div>
            Count : {count} 
            <button onClick = {()=>setCount(intial)}>Reset</button>
            <button onClick = {()=>setCount(prevCount => prevCount+1) }>Increment</button>
            <button onClick = {()=>setCount(prevCount => prevCount-1) }>Decrement</button>
        </div>
    )
}

export default HookCounter2
