import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from 'reactstrap'

function RegisterForm() {

  return (

    <div>
      <Formik 
      
        render={props => {
          return (
            <div>
              <Form>
                <Field type="text" name="username" placeholder="Username" />
                <Field type="text" name="fullname" placeholder="Full Name" />
                <Field type="text" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <Button color="primary">Register</Button>
              </Form>
            </div>
          )
        }}
      />
    </div>
  )
}

export default RegisterForm;