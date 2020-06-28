import React, {useState, useEffect} from 'react'

function HookCounter4() {
    const [count , setCount] = useState(0);
    const [name , setName] =useState('')
    useEffect(() => {
        console.log('hi')
        document.title = `you clciked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>click {count} times</button>
        </div>
    )
}

export default HookCounter4
