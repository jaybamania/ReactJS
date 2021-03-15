import React, { useState } from 'react'
import MouseMoveHooks from './MouseMoveHooks'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>{display? 'Disable' : 'Enable'} Display</button>
            {display ? <MouseMoveHooks />:null}
        </div>
    )
}

export default MouseContainer
