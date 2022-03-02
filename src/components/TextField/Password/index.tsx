/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {
  IconButton,
  InputAdornment,
  Tooltip,
  Zoom,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type props = TextFieldProps & {
  tip?: string;
  removeSpace?: boolean;
};

const TextFieldPassword: React.FC<props> = ({ name, ...otherProps }) => {
  const [visible, setVisible] = useState(false);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const configTextField = {
    id: name,
    label: name,
    ...otherProps,
    fullWidth: true,
    type: visible ? 'text' : 'password',
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <Tooltip
            TransitionComponent={Zoom}
            title="Alterar a visibilidade da senha"
            arrow
          >
            <IconButton
              onClick={() => setVisible((currentState) => !currentState)}
            >
              {visible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </Tooltip>
        </InputAdornment>
      ),
    },
  };

  if (errors && errors[`${name}`]) {
    configTextField.error = true;
    configTextField.helperText = errors[`${name}`].message;
  }

  return (
    <Controller
      name={`${name}`}
      control={control}
      render={({ field }) => (
        <TextField
          variant="outlined"
          size="small"
          {...configTextField}
          {...field}
        />
      )}
    />
  );
};
export default TextFieldPassword;
