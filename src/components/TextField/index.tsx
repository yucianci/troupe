/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import { TextField, TextFieldProps, Tooltip, Zoom } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { Main, Icon, Text } from './styles';

type Props = TextFieldProps & {
  isArray?: boolean;
  required?: boolean;
  tip?: { text: string; example: string };
  removeSpace?: boolean;
};

const TextFieldWrapper: React.FC<Props> = ({
  name,
  isArray,
  label,
  required,
  tip,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
    getValues,
  } = useFormContext();

  const configTextField = {
    id: name,
    ...otherProps,
    fullWidth: true,
  };

  if (!isArray) {
    if (errors && errors[`${name}`]) {
      configTextField.error = true;
      configTextField.helperText = errors[`${name}`].message;
    }
  } else if (errors) {
    const arrayName = name?.split('[')[0];
    const index = name?.split('[')[1].split(']')[0];
    const fieldName = name?.split('.')[1];

    if (
      errors[`${arrayName}`] &&
      errors[`${arrayName}`][`${index}`] &&
      errors[`${arrayName}`][`${index}`][`${fieldName}`]
    ) {
      configTextField.error = true;
      configTextField.helperText =
        errors[`${arrayName}`][`${index}`][`${fieldName}`].message;
    }
  }

  return (
    <Main tooltip={tip}>
      <Controller
        defaultValue={getValues(`${name}`)}
        name={`${name}`}
        control={control}
        render={({ field }) => (
          <TextField
            variant="outlined"
            size="small"
            label={`${label} ${required ? '*' : ''}`}
            disabled={getValues('action') === 'view'}
            {...configTextField}
            {...field}
          />
        )}
      />
      {label && tip && (
        <Tooltip
          TransitionComponent={Zoom}
          placement="top"
          arrow
          title={
            <>
              <Text>{label}</Text>
              <p>{tip.text}</p>
              <em>exemplo: {tip.example}</em>
            </>
          }
        >
          <Icon />
        </Tooltip>
      )}
    </Main>
  );
};

export default TextFieldWrapper;
