import React from 'react'
import useInput from '../hooks/useInput'

function UserForm() {

    const [firstname, bindFirstName, resetFirstName]=useInput('')
    const [lastname, bindLastName, resetLasttName]=useInput('')

    const submitHandler = e =>{
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetFirstName()
        resetLasttName()
    }
    return (
        <div>
            <form onSubmit = {submitHandler}>
                <div>
                    <label>First Name </label>
                    <input
                        text = "text" 
                        {...bindFirstName}
                    />
                </div>
                <div>
                    <label>Last Name </label>
                    <input
                        text = "text" 
                        {...bindLastName}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
