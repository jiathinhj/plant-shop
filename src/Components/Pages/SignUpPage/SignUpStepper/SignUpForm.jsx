import { Box, Button, Container, CssBaseline } from "@mui/material";
import { Formik, Form } from "formik";
import React from "react";
import TextFieldWrapper from "../../../Form/TextFieldWrapper";
import CheckBoxWrapper from "../../../Form/CheckBoxWrapper";
import { GENDER } from "../../../Constants/SignUp";
import axios from "axios";

const initialValues2 = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  gender: "",
  username: "",
};

const SignUpForm = () => {
  const signUp = async (data) => {
    await axios
      .post(`http://localhost:827/auth/signup`, data)
      .then((res) => console.log(res.result))
      .catch((err) => console.log(err));
    console.log(data);
  };

  return (
    <>
      <CssBaseline />
      <Formik initialValues={initialValues2} onSubmit={signUp}>
        <Form>
          <Box sx={{ mt: 1 }}>
            <TextFieldWrapper
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextFieldWrapper
              margin="normal"
              required
              fullWidth
              name="username"
              label="username"
              type="text"
              id="username"
              autoComplete="current-username"
            />
            <TextFieldWrapper
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextFieldWrapper
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label="phoneNumber"
              type="text"
              id="phoneNumber"
              autoComplete="current-phoneNumber"
            />
            <TextFieldWrapper
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="firstName"
              type="text"
              id="firstName"
              autoComplete="current-firstName"
            />
            <TextFieldWrapper
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="lastName"
              type="text"
              id="lastName"
              autoComplete="current-lastName"
            />

            <CheckBoxWrapper
              name={"gender"}
              values={GENDER}
              legend={"gender"}
            />
            <Button type="submit" variant="contained" fullWidth>
              Sign Up
            </Button>
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
