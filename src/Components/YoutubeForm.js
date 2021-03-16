
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name:'jaykumar',
    email:'',
    channel:'',
    comments : '',
    address: ''
}

const onSubmit = values =>{
    console.log('Form Data : ',values)
}



const validationSchema = Yup.object({
    name : Yup.string().required('Required!'),
    email : Yup.string()
        .email('Invalid Email Fromat!')
        .required('Required!'),
    channel : Yup.string().required('Required!'),
    address : Yup.string().required('Required!')
})

function YoutubeForm() {
    

    //  console.log('Form Values',formik.values)
    //  console.log('Form Errors',formik.errors)
    
    return (
        <Formik
            initialValues = {initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name' >
                        {(errorMsg) => {
                            return <div className="error" >{errorMsg}</div>
                        }}
                    </ErrorMessage>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name='email' component={TextError} />
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name='channel' />
                </div>
                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    <Field as='textarea' type='text' id='comments' name='comments' />
                    
                </div>
                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <Field name='address' >
                        {/* Render Props Pattern */}
                        {
                            (props) =>{
                                const {field,form,meta} = props
                                console.log('Render Props',props)
                                return  <div>
                                    <input type="text" id='address' {...field} />
                                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                </div>
                            }
                        }
                        </Field>
                    <ErrorMessage name='channel' />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm
