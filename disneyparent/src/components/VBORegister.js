import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import styled from "styled-components";
// import axios from "axios";
// import * as Yup from "yup";

import volRegistration from "./img/volunteer-registration.jpg";

// Custom Styles

const FormContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const FormDiv = styled.div`
  background: rgba(255, 255, 255, 0.6);
  max-width: 800px;
  width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5em 0;

  h5 {
    font-size: 2rem;
    display: flex;
    justify-content: flex-start;
    margin-top: 1em;
    margin-left: 1em;

  }

  .inputCon {
    margin-top: 1.2em;
    display: flex;
    justify-content: space-between;
  }

  input {
    width: 250px;
    height: 40px;
    padding: 1em;
    margin-top: 1em;
    margin-left: 1.2em;
    font-size: 1.2rem;
    flex-direction: space-between;
    border: 0.1em solid #ababab;
  }

  button {
    font-size: 1.5rem;
    padding: 0.5em 2em;
    margin-top: 1em;
  }

  p {
    font-size: 1.5rem;
    margin-top: 2em;

    a {
      font-style: italic;
      color: red;
    }
  }
`;

const InputConDiv = styled.div`
  display: flex;
`;

const initialDetails = {
  businessname: '',
  industry: '', 
  address: '', 
  years_of_operation: '', 
  no_of_employees: '', 
  state: '', 
  fullname: '', 
  position: '', 
  phone: '', 
  email: ''
}


function VBORegisterForm() {

  const [regDetails, setRegDetails] = useState(initialDetails);

  const handleChange = evt => {
    setRegDetails({
      ...regDetails, [evt.target.name]: evt.target.value
    })
    console.log(`${evt.target.name}, ${evt.target.value}`)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(regDetails)
  }

  return (
    <div>
      <Formik
        render={props => {
          return (
            <Form onSubmit={e => handleSubmit(e)}>
              <FormContainer
                style={{
                  backgroundImage: "url(" + volRegistration + ")",
                  width: "100%",
                  height: "100vh",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              >
                <FormDiv>
                  <div>
                    <h4>Volunteer Business Owner Registration</h4>
                  </div>
                  <div>
                    <h5>Company Details</h5>
                    <InputConDiv className="inputCon">
                      <Field
                        onChange={e => handleChange(e)}
                        type="text" name="businessname" placeholder="Business Name" />
                      <Field onChange={e => handleChange(e)} type="text" name="industry" placeholder="Industry" />
                    </InputConDiv>
                    <InputConDiv className="inputCon">
                      <Field onChange={e => handleChange(e)} type="text" name="address" placeholder="Address" />
                      <Field onChange={e => handleChange(e)} type="text" name="years_of_operation" placeholder="Years of Operation" />
                    </InputConDiv>
                    <InputConDiv className="inputCon">
                      <Field onChange={e => handleChange(e)} type="text" name="no_of_employees" placeholder="Number of Employees" />
                      <Field onChange={e => handleChange(e)} type="text" name="state" placeholder="State" />
                    </InputConDiv>
                  </div>
                  <div>
                    <h5>Principal Contact</h5>
                    <InputConDiv className="inputCon">
                      <Field onChange={e => handleChange(e)} type="text" name="fullname" placeholder="Full Name" />
                      <Field onChange={e => handleChange(e)} type="text" name="position" placeholder="Position" />
                    </InputConDiv>
                    <InputConDiv className="inputCon">
                      <Field onChange={e => handleChange(e)} type="text" name="phone" placeholder="Phone" />
                      <Field onChange={e => handleChange(e)} type="text" name="email" placeholder="Email" />
                    </InputConDiv>
                  </div>
                  <Button type="submit" color="primary">
                    Register
                  </Button>
                  <p>
                    Already have an account?
                    <Link to="/vbo-login"> Login </Link>
                  </p>
                </FormDiv>
              </FormContainer>
            </Form>
          );
        }}
      />
    </div>
  );
}

export default VBORegisterForm;
