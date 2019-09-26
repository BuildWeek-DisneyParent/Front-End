import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
// import * as Yup from "yup";

import signInBackground from "./img/signInBackground.png";

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

const initialDetails = {
  username: "",
  password: ""
};

// Api Endpoint
const loginEndpoint =
  "https://buildweek-disneyparent.herokuapp.com/api/auth/login";

function LoginForm() {
  const [loginDetails, setLoginDetails] = useState(initialDetails);

  const handleChange = evt => {
    setLoginDetails({
      ...loginDetails, [evt.target.name]: evt.target.value
    })
    console.log(`${evt.target.name}, ${evt.target.value}`)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(loginDetails)
  }

  // const addLoginDetails = (formValues, actions) => {
  //   const detailsToPost = {
  //     username: formValues.username,
  //     password: formValues.password
  //   };

  //   axios
  //     .post(loginEndpoint, detailsToPost)
  //     .then(result => {
  //       setLoginDetails(loginDetails.concat(result.data));
  //       actions.resetForm();
  //     })
  //     .catch(error => {
  //       return error;
  //     });
  // };

  return (
    <div>
      <Formik
        render={props => {
          return (
            <Form onSubmit={e => handleSubmit(e)}>
              <FormContainer
                style={{
                  backgroundImage: "url(" + signInBackground + ")",
                  width: "100%",
                  height: "100vh",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              >
                <FormDiv>
                  <Field onChange={e => handleChange(e)} type="text" name="username" placeholder="Username" />
                  <Field
                    onChange={e => handleChange(e)}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <Button type="submit" color="primary">
                    Sign In
                  </Button>
                  <p>
                    Are you a second parent?
                    <Link to="/sp-login"> Login </Link>
                  </p>
                  <p>Or</p>
                  <p>
                    <Link to="/register"> Register </Link>
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
