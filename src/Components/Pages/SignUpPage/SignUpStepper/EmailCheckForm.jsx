import { Box, Button, CssBaseline } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import TextFieldWrapper from "../../../Form/TextFieldWrapper";
import axios from "axios";

const initialValues = {
  email: "",
};

const EmailCheckForm = () => {
  const onCheckEmail = async (data) => {
    const isDuplicated = await axios.get(
      `http://localhost:827/auth/signup?=${data.emailCheck}`
    );
    console.log(isDuplicated);
    console.log(data.emailCheck);
  };

  return (
    <>
      <CssBaseline />
      <Formik initialValues={initialValues} onSubmit={onCheckEmail}>
        <Form>
          <Box>
            <TextFieldWrapper
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="emailCheck"
              autoComplete="emailCheck"
              autoFocus
            />

            <Button type="submit" variant="contained" fullWidth>
              Check email
            </Button>
          </Box>
        </Form>
      </Formik>
    </>
  );
};

export default EmailCheckForm;
