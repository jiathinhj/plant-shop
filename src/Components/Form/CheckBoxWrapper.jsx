import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

const CheckBoxWrapper = ({ name, legend, values, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configs = {
    ...field,
    ...otherProps,
  };

  if (meta && meta.touched && meta.error) {
    configs.error = true;
    configs.helperText = meta.error;
  }

  const formControlConfigs = {};
  if (meta.touched && meta.error) {
    configs.error = true;
  }

  return (
    <FormControl {...formControlConfigs}>
      <FormLabel component={"legend"}>{legend}</FormLabel>
      <RadioGroup {...configs} row>
        {values.map((value, i) => (
          <FormControlLabel
            key={i}
            value={value.gender}
            control={<Radio />}
            label={value.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CheckBoxWrapper;
