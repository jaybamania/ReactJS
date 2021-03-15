import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count,setCount] = useState(0)

    const tick = () =>{
        console.log('counting ')
        setCount(prevState => prevState +1)
    }
    useEffect(() => {
        // function doSomething(){
        //     console.log(someProps)
        // }
        // doSomething()
        console.log('Interval Started')
        const interval =  setInterval(tick,1000)

        return () =>{
            console.log('Interval Closed')
            clearInterval(interval)
        }
    },[])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHookCounter
