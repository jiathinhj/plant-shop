import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configs = {
    ...field,
    ...otherProps,
  };

  if (meta.touched && meta.error) {
    configs.error = true;
    configs.helperText = meta.error;
  }
  return <TextField {...configs} />;
};

export default TextFieldWrapper;
