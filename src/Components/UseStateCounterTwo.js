import React, { useState } from 'react'

function UseStateCounterTwo() {
    const intialCount = 0
    const [count,setCount] = useState(0)

    const incrementFive = () =>{
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount +1 )
        }
    }
    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(intialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            {/* <button onClick={() => setCount(count + 5)}>Increment 5</button> */}
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default UseStateCounterTwo
