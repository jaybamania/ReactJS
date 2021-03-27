import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Checkbox,
    Stack
} from '@chakra-ui/core'

function ChakraCheckBox(props) {
    const { label , name, options, ...rest} = props
    return (
        <div className="form-control">
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Field name={name} {...rest}>
            {
                ({field, form})=>{
                    return options.map(option =>{
                        return (
                            
                            <React.Fragment key={option.key}>
                                <Stack spacing={10} direction="row">
                                <Checkbox 
                                    size="md" 
                                    colorScheme="green" 
                                    id={option.value} 
                                    {...field} 
                                    value={option.value} 
                                    checked={field.value.includes(option.value)}
                                >
                                <FormLabel htmlFor={option.value}>{option.key}</FormLabel>
                                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                                </Checkbox>
                                
                                </Stack>
                                
                                
                            </React.Fragment>
                            
                            
                        )
                        
                    }
                    )
                    
                }
            }
        </Field>
        
        </div>
        // <div className="form-control">
        //     <label>{label}</label>
        //     <Field name={name} {...rest}>
        //         {
        //             ({ field }) =>{
        //                 return options.map(option =>{
        //                     return (
        //                         <React.Fragment key={option.key}>
        //                             <span><input 
        //                                 type='checkbox' 
        //                                 id={option.value} 
        //                                 {...field} 
        //                                 value={option.value} 
        //                                 checked={field.value.includes(option.value)}
        //                             />
        //                             <label htmlFor={option.value}>{option.key}</label>
        //                             </span>
        //                         </React.Fragment>
        //                     )
        //                 })
                        
        //             }
        //         }
        //     </Field>
        //     <ErrorMessage name={name} component={TextError} />
        // </div>
    )
}

export default ChakraCheckBox
