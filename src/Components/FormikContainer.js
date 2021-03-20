import { Form, Formik } from 'formik'
import React from 'react'

import * as Yup from 'yup'
import FromikControl from './FromikControl'

function FormikContainer() {
    const dropdownOptions = [
        { key : 'Select an option' , value:''},
        { key : 'Car' , value:'1'},
        { key : 'Bike' , value : '2'},
        { key : 'Airplane' , value : '3'},
        { key : 'Bus' , value : '4'}
    ]
    const initialValues = {
        email:'',
        description:'',
        selectOption : ''
    }
    const validationSchema = Yup.object({
        email : Yup.string().required('Required'),
        description : Yup.string().required('Required'),
        selectOption : Yup.string().required('Required')
    })
    const onSubmit = values => console.log('Form data',values)
    return (
        <Formik 
            initialValues = {initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => <Form>
                    <FromikControl 
                        control='input' 
                        type='email' 
                        label='Email' 
                        name='email' 
                    />
                    <FromikControl 
                        control='textarea'  
                        label='Description' 
                        name='description'
                    />
                    <FromikControl 
                        control='select'  
                        label='Select the vechicle' 
                        name='selectOption'
                        options={dropdownOptions}
                    />
                    <button type='submit'>Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default FormikContainer
