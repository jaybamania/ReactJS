import React from 'react'
import ChakraCheckBox from './ChakraCheckbox'
import ChakraInput from './ChakraInput'
import CheckBoxGroup from './CheckBoxGroup'
import DatePicker from './DatePicker'
import Input from './Input'
import RadioButtons from './RadioButtons'
import Select from './Select'
import Textarea from './Textarea'

function FormikControl(props) {
    const {control, ...rest} = props
    switch(control){
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} /> 
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
            return <CheckBoxGroup {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        case 'chakrainput':
            return <ChakraInput {...rest} />
        case 'chakracheckbox':
            return <ChakraCheckBox {...rest} />
        default :
            return null   
    }
}

export default FormikControl
