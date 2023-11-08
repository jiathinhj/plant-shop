import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

const SelectFieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    const { option } = e.target;
    setFieldValue(name, option);
  };

  const configs = {
    ...field,
    otherProps,
    select: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configs.error = true;
    configs.helperText = meta.error;
  }

  return <TextField {...configs}></TextField>;
};

export default SelectFieldWrapper;
