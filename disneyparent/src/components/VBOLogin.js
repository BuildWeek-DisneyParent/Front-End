import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
// import * as Yup from "yup";

import volLogin from "./img/volunteer-login.jpg";

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

  input {
    width: 250px;
    height: 40px;
    border: none;
    padding: 1em;
    margin: 1.2em;
    font-size: 1.2rem;
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


function LoginView() {
  return (
    <div>
      <Formik
        render={props => {
          return (
            <Form>
              <FormContainer
                style={{
                  backgroundImage: "url(" + volLogin + ")",
                  width: "100%",
                  height: "100vh",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              >
                <FormDiv>
                  <Field type="email" name="email" placeholder="Business Email" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Business Id"
                  />
                  <Button type="submit" color="primary">
                    Sign In
                  </Button>
                  <p>Or</p>
                  <p>
                    <Link to="/vbo-register"> Register </Link>
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

function VBOLoginForm() {

  return (
    <div>
      <LoginView />
    </div>
  );
}

export default VBOLoginForm;

