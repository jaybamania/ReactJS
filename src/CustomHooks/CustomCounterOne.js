import React from 'react'
import useCounter from '../hooks/useCounter'

function CustomCounterOne() {

    const [count, increment, decrement, reset] = useCounter(2,2)
    
    return (
        <div>
            Count - {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomCounterOne
