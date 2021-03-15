import React, { useContext } from 'react'
import { JobContext, UserContext } from '../App'
import UseContextF from './UseContextF'

function UseContextE() {
    const user = useContext(UserContext)
    const job = useContext(JobContext)
    return (
        <div>
            {/* <UseContextF  /> */}
            {user} - {job}
        </div>
    )
}

export default UseContextE
