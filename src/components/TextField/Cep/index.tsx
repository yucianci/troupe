/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import {
  IconButton,
  InputAdornment,
  Tooltip,
  TextField,
  TextFieldProps,
  Zoom,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import searchCEP from '../../../utils/viaCep';

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

type Props = TextFieldProps & {
  isArray?: boolean;
  tip?: string;
  responsible?: boolean;
  removeSpace?: boolean;
};

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
      guide={false}
      showMask
    />
  );
}

const TextFieldCepWrapper: React.FC<Props> = ({
  name,
  isArray,
  ...otherProps
}) => {
  const {
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const configTextField = {
    id: name,
    label: name,
    autoComplete: name,
    ...otherProps,
    fullWidth: true,
    InputProps: {
      inputComponent: TextMaskCustom as any,
      endAdornment: (
        <InputAdornment position="end">
          <Tooltip
            TransitionComponent={Zoom}
            title="Preencher endereço automaticamente"
            arrow
          >
            <IconButton
              onClick={() => {
                const index = isArray
                  ? name?.split('[')[1].split(']')[0]
                  : undefined;
                searchCEP(getValues(`${name}`), setValue, index);
              }}
            >
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </InputAdornment>
      ),
    },
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
    <Controller
      name={`${name}`}
      control={control}
      render={({ field }) => (
        <TextField
          variant="outlined"
          disabled={getValues('action') === 'view'}
          {...configTextField}
          {...field}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              const index = isArray
                ? name?.split('[')[1].split(']')[0]
                : undefined;
              searchCEP(getValues(`${name}`), setValue, index);
            }
          }}
        />
      )}
    />
  );
};
export default TextFieldCepWrapper;
