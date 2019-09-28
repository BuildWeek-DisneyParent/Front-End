import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import styled from "styled-components";
// import axios from "axios";
// import * as Yup from "yup";

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
  fullname: "",
  email: "",
  password: ""
};

// Api Endpoint
const regEndpoint =
  "https://buildweek-disneyparent.herokuapp.com/api/auth/register";

function RegisterForm() {
  const [regDetails, setRegDetails] = useState(initialDetails);

  const handleChange = evt => {
    setRegDetails({
      ...regDetails,
      [evt.target.name]: evt.target.value
    });
    console.log(`${evt.target.name}, ${evt.target.value}`);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(regDetails);
  };


  return (
    <div>
      <Formik
        render={props => {
          return (
            <Form onSubmit={e => handleSubmit(e)}>
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
                  <Field
                    onChange={e => handleChange(e)}
                    type="text"
                    name="username"
                    placeholder="Username"
                  />
                  <Field
                    onChange={e => handleChange(e)}
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                  />
                  <Field
                    onChange={e => handleChange(e)}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <Field
                    onChange={e => handleChange(e)}
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

export default RegisterForm;
