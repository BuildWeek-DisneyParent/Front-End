import React, { useState } from "react"; 
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import * as Yup from "yup";

import registerBackground from "./img/registerBackground.png";

// Custom Styles

const FormContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const FormDiv = styled.div`
  background: rgba(255, 255, 255, 0.6);
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10em 0;
  padding: 5em 0;

  @media phone {
    background: #222;
  }

  input {
    width: 250px;
    height: 40px;
    border: none;
    padding: 1em;
    margin: 1.2em;
    font-size: 1.2rem;
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

const initialRegForm = {
  username: "",
  fullname: "",
  email: "",
  password: ""
};

function RegisterView({ onSubmit }) {
  return (
    <div>
      <Formik
        initialValues={initialRegForm}
        onSubmit={onSubmit}
        render={props => {
          return (
            <Form>
              <FormContainer
                style={{
                  backgroundImage: "url(" + registerBackground + ")",
                  width: "100%",
                  height: "100vh",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              >
                <FormDiv>
                  <Field type="text" name="username" placeholder="Username" />
                  <Field type="text" name="fullname" placeholder="Full Name" />
                  <Field type="text" name="email" placeholder="Email" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <Button type="submit" color="primary">
                    Register
                  </Button>
                  <p>
                    Already have an account? 
                    <Link to="/login"> Login </Link>
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

// Api Endpoint
const regEndpoint =
  "https://buildweek-disneyparent.herokuapp.com/api/auth/register";

function RegisterForm() {
  const [regDetails, setRegDetails] = useState([]);

  const addRegDetails = (formValues, actions) => {
    const detailsToPost = {
      username: formValues.username,
      fullname: formValues.fullname,
      email: formValues.email,
      password: formValues.password
    };

    axios
      .post(regEndpoint, detailsToPost)
      .then(result => {
        // result.data contains inputs gotten from the registration form field
        setRegDetails(regDetails.concat(result.data));
        actions.resetForm();
      })
      .catch(error => {
        return error;
      });
  };

  return (
    <div>
      <RegisterView onSubmit={addRegDetails} />
    </div>
  );
}

export default RegisterForm;
