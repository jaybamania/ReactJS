import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const initialValues = {
    name:'jaykumar',
    email:'',
    channel:''
}

const onSubmit = values =>{
    console.log('Form Data : ',values)
}

// const validate = values =>{
//     // values.name, values.email, values.channel
//     // errors.name, errors.email, errors.channel
//     let errors = {}

//     if(!values.name){
//         errors.name = 'Required'
//     }

//     if(!values.email){
//         errors.email = 'Required'
//     }else if(!/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(values.email)){
//         errors.email='Invalid Email Format'
//     }

//     if(!values.channel){
//         errors.channel = 'Required'
//     }

//     return errors
// }

const validationSchema = Yup.object({
    name : Yup.string().required('Required!'),
    email : Yup.string()
        .email('Invalid Email Fromat!')
        .required('Required!'),
    channel : Yup.string().required('Required!')
})

function OldYoutubeForm() {
    const formik = useFormik({
        initialValues  ,
        onSubmit  ,
        // validate ,
        validationSchema 
    })

    //  console.log('Form Values',formik.values)
    //  console.log('Form Errors',formik.errors)
    console.log('Visited Values',formik.touched)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    onChange={formik.handleChange} 
                    onBlur = {formik.handleBlur}
                    value={formik.values.name} 
                />
                {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
                </div>
                <br/>
                <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    onChange={formik.handleChange} 
                    onBlur = {formik.handleBlur}
                    value={formik.values.email} 
                />
                {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
                </div>
                <br/>
                <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input 
                    type='text' 
                    id='channel' 
                    name='channel' 
                    onChange={formik.handleChange} 
                    onBlur = {formik.handleBlur}
                    value={formik.values.channel} 
                />
                {formik.errors.channel && formik.touched.channel ? <div className="error">{formik.errors.channel}</div> : null}
                </div>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default OldYoutubeForm
