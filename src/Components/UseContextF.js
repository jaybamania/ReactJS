import React from 'react'
import { JobContext, UserContext } from '../App'

function UseContextF() {
    return (
        <div>
            <UserContext.Consumer >
                {
                    user =>{
                        return (
                            <JobContext.Consumer>
                                {
                                    channel => {
                                        return <div> User Name {user}, Job : {channel}</div>
                                    }
                                }
                            </JobContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
           
        </div>
    )
}

export default UseContextF
