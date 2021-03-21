import { Form, Formik } from 'formik'
import React from 'react'

import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {
    const checkBoxOptions = [
        { key : 'Javascript' , value:'c1'},
        { key : 'Python' , value : 'c2'},
        { key : 'C++' , value : 'c3'},
        { key : 'Java' , value : 'c4'}
    ]
    const radioButtonOptions = [
        { key : 'Javascript' , value:'r1'},
        { key : 'Python' , value : 'r2'},
        { key : 'C++' , value : 'r3'},
        { key : 'Java' , value : 'r4'}
    ]
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
        selectOption : '',
        radioOptions:'',
        checkBoxOption:[],
        birthDate:null,
    }
    const validationSchema = Yup.object({
        email : Yup.string().required('Required'),
        description : Yup.string().required('Required'),
        selectOption : Yup.string().required('Required'),
        radioOptions : Yup.string().required('Required'),
        checkBoxOption : Yup.array().required('Required'),
        birthDate : Yup.date().required('Required').nullable()
    })
    const onSubmit = values => {
        console.log('Form data',values)
        console.log('Saved Data : ',JSON.parse(JSON.stringify(values)))
    }
    return (
        <Formik 
            initialValues = {initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => <Form>
                    <FormikControl 
                        control='input' 
                        type='email' 
                        label='Email' 
                        name='email' 
                    />
                    <FormikControl 
                        control='textarea'  
                        label='Description' 
                        name='description'
                    />
                    <FormikControl 
                        control='select'  
                        label='Select the vechicle' 
                        name='selectOption'
                        options={dropdownOptions}
                    />
                    <FormikControl 
                        control='radio'  
                        label='Select One topic' 
                        name='radioOptions'
                        options={radioButtonOptions}
                    />
                    <FormikControl 
                        control='checkbox'  
                        label='Pick you best choices' 
                        name='checkBoxOption'
                        options={checkBoxOptions}
                    />
                    <FormikControl 
                        control='date'  
                        label='D.O.B' 
                        name='birthDate'
                    />
                    <button type='submit'>Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default FormikContainer
