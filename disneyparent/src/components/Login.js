import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import styled from "styled-components";
import signInBackground from './img/signInBackground.png';
import { Link } from 'react-router-dom';

// Custom Styles
const FormContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const FormDiv = styled.div`
  background: rgba(255, 255, 255, 0.5);
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10em 0;
  padding: 5em 0;

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
  password: ""
}

function LoginForm() {
  return (
    <div>
      <Formik
        initialValues={initialRegForm}
        render={props => {
          return (
            <Form>
              <FormContainer
                style={{
                  backgroundImage: "url(" + signInBackground + ")",
                  width: "100%",
                  height: "auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              >
                <FormDiv>
                  <Field type="text" name="username" placeholder="Username" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <Button color="primary">Sign In</Button>
                  <p>Are you a second parent? 
                    <Link to="/sp-login"> Login </Link>
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

export default LoginForm;