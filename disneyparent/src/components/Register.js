import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import styled from "styled-components";
import axios from "axios";

import registerBackground from "./img/registerBackground.png";

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
`;

// GET and POST Api Points
// const formApi = 'https://example.com'

export default function RegisterForm() {

  const [ userList, setUserList] = useState([]);

  const addRegDetails = (formValues, doSomething) => {
    const detailsToPost = {
      username: formValues.username,
      fullname: formValues.fullname,
      email: formValues.email,
      password: formValues.password
    };

    axios
      .post(formApi, detailsToPost)
      .then(result => {
        setUserList(userList.concat(result.data));
      })
      .catch();
  };
}

const initialRegForm = {
  username: "",
  fullname: "",
  email: "",
  password: ""
};

function RegisterFormView() {
  return (
    <div>
      <Formik
        initialValues={initialRegForm}
        render={props => {
          return (
            <Form>
              <FormContainer
                style={{
                  backgroundImage: "url(" + registerBackground + ")",
                  width: "100%",
                  height: "auto",
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
                  <Button color="primary">Register</Button>
                </FormDiv>
              </FormContainer>
            </Form>
          );
        }}
      />
    </div>
  );
}
