import { Form, Formik } from 'formik'
import React from 'react'

import * as Yup from 'yup'
import FormikControl from './FormikControl'

function EnrollmentForm() {
    const courseSelection = [
        {key : 'Select an option' , value : ''},
        {key : 'Web Development', value:'webdevelopment'},
        {key : 'Android Development' , value:'androiddevelopment'},
        {key : 'Full Stack Developer' , value:'fullstackdeveloper'},
    ]
    const skillsetSelection = [
        {key : 'HTML', value:'html'},
        {key : 'CSS' , value:'css'},
        {key : 'Javascript' , value:'javascript'},
    ]
    const initialValues = {
        email:'',
        bio:'',
        course:'',
        skillset:[],
        courseDate:null,
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required!'),
        bio: Yup.string().required('Required!'),
        course: Yup.string().required('Required!'),
        skillset: Yup.array().required('Required!'),
        courseDate: Yup.date().required('Required!').nullable()
    })
    const onSubmit = values =>{
        console.log('Form Data ',values)
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik =>{
                    return <Form>
                        <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                        />
                        <FormikControl
                            control='textarea'
                            label='Bio'
                            name='bio'
                        />
                        <FormikControl
                            control='select'
                            label='Course'
                            name='course'
                            options={courseSelection}
                        />
                        <FormikControl
                            control='chakracheckbox'
                            label='Skill Set'
                            name='skillset'
                            options={skillsetSelection}
                        />
                        <FormikControl 
                        control='date'  
                        label='Course Date' 
                        name='courseDate'
                    />
                    <button type='submit' disabled={!formik.isValid}>
                        Submit
                    </button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default EnrollmentForm
