import React, { useEffect, useState } from 'react'

function MouseMoveHooks() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log('UseEffect Called')
        window.addEventListener('mousemove', logMousePosition)

        return ()=>{
            console.log('Component Unmounting Code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <div>
           Hooks  X - {x}   Y - {y}
        </div>
    )
}

export default MouseMoveHooks
