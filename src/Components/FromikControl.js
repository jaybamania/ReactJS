import React from 'react'
import Input from './Input'
import Select from './Select'
import Textarea from './Textarea'

function FromikControl(props) {
    const {control, ...rest} = props
    switch(control){
        case 'input':
             return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} /> 
        case 'radio':
        case 'checkbox':
        case 'date':
            default : return null   
    }
    return (
        <div>
            
        </div>
    )
}

export default FromikControl
