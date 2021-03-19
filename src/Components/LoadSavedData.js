
import { ErrorMessage, FastField, Field, FieldArray, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name:'jaykumar',
    email:'',
    channel:'',
    comments : '',
    address: '',
    social:{
        facebook : '',
        twitter: ''
    },
    phoneNumbers : ['',''],
    phNumbers :['']
}

const savedValues = {
    name:'jaykumar',
    email:'j@example.com',
    channel:'jaybamania',
    comments : 'You are great',
    address: 'Ahmedabad',
    social:{
        facebook : '',
        twitter: ''
    },
    phoneNumbers : ['',''],
    phNumbers :['']
}

const onSubmit = (values,onSubmitting) =>{
    console.log('Form Data : ',values)
    console.log('OnSubmitting Props : ',onSubmitting)
    onSubmitting.setSubmitting(false)
}



const validationSchema = Yup.object({
    name : Yup.string().required('Required!'),
    email : Yup.string()
        .email('Invalid Email Fromat!')
        .required('Required!'),
    channel : Yup.string().required('Required!'),
    address : Yup.string().required('Required!')
    // comments : Yup.string().required('')
})

const validateComments = value=>{
    let error 
    if(!value){
        error='Required'
    }
    return error
}

function LoadSavedData() {
    
    const [formValues, setFormValues] = useState(null)
    //  console.log('Form Values',formik.values)
    //  console.log('Form Errors',formik.errors)
    
    return (
        <Formik
            initialValues = {formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            // validateOnChange={false}
            // validateOnBlur={false}
            // validateOnMount
        >
            {
                formik =>{
                    console.log('Formik Props : ',formik)
                    return (
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
                            <Field as='textarea' type='text' id='comments' name='comments' validate={validateComments} />
                            <ErrorMessage name='comments' component={TextError} />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='address'>Address</label>
                            <Field name='address' >
                                {/* Render Props Pattern */}
                                {
                                    (props) =>{
                                        // console.log('Field Render')
                                        const {field,form,meta} = props
                                        // console.log('Render Props',props)
                                        return  <div>
                                            <input type="text" id='address' {...field} />
                                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                        </div>
                                    }
                                }
                                </Field>
                            <ErrorMessage name='channel' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='facebook'>Facebook Profile</label>
                            <Field type='text' id='facebook' name='social.facebook' />
                        </div>
        
                        <div className='form-control'>
                            <label htmlFor='twitter'>Twitter Profile</label>
                            <Field type='text' id='twitter' name='social.twitter' />
                        </div>
        
                        <div className='form-control'>
                            <label htmlFor='primaryPh'>Primary phone Number</label>
                            <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                        </div>
        
                        <div className='form-control'>
                            <label htmlFor='secondaryPh'>Secondary phone Number</label>
                            <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
                        </div>
        
                        <div className='form-control'>
                            <label htmlFor='secondaryPh'>Secondary phone Number</label>
                            <FieldArray name='phNumbers'>
                                {
                                    (fieldArrayProps)=>{
                                        // console.log('fieldArrayProps',fieldArrayProps)
                                        const {push, remove, form} = fieldArrayProps
                                        const {values} = form
                                        const {phNumbers} = values
                                        console.log('Form Errors',form.errors)
                                        return <div>
                                            {
                                                phNumbers.map((phNumber,index) =>(
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`} />
                                                        { index > 0 ?
                                                        <button type='button' onClick={() => remove(index)} > - </button>:null
                                                        }
                                                        <button type='button' onClick={() => push('')}> + </button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                }
                            </FieldArray>
                        </div>
                        {/* <button type='button' onClick={()=> formik.validateField('comments')}>Validate comments</button>
                        <button type='button' onClick={()=> formik.validateForm()}>Validate all</button>
                        <button type='button' onClick={()=> formik.setFieldTouched('comments')}>Visit comments</button>
                        <button type='button' onClick={()=> formik.setTouched({
                            name:true,
                            email : true,
                            channel : true,
                            comments : true
                        })}>visit fields</button> */}
                        <button type="button" onClick={() => setFormValues(savedValues)} >Load Saved Data</button>
                        <button type='submit' disabled={(
                            // formik.dirty && 
                            !formik.isValid ||
                            formik.isSubmitting)}>Submit</button>
                    </Form>
                    )
                }
            }
            
        </Formik>
    )
}

export default LoadSavedData
