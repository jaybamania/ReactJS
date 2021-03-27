import { Button } from '@chakra-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'

import * as Yup from 'yup'
import FormikControl from './FormikControl'

function LoginForm() {
    const initialValues = {
        email:'',
        password:'',
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required!'),
        password: Yup.string().required('Required!')
    })
    const onSubmit = values => {
        console.log('Form Data',values)
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik =><Form>
                        <FormikControl 
                            control='chakrainput'
                            type='email'
                            label='Email'
                            name='email'
                        />
                        <FormikControl 
                            control='chakrainput'
                            type="password"
                            label='Password'
                            name='password'
                        />
                        <Button colorScheme="teal" type='submit' variant="solid"  disabled={!formik.isValid}>
                            Submit
                        </Button>
                        {/* <button type='submit' disabled={!formik.isValid} >Submit</button> */}
                    </Form>
            }
        </Formik>
    )
}

export default LoginForm
