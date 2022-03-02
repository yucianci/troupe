/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  onClick?: () => void;
}

type Props = SearchProps & TextFieldProps;

const TextFieldTableSearch: React.FC<Props> = ({
  name,
  onClick,
  ...otherProps
}) => {
  const configTextField = {
    id: name,
    label: name,
    ...otherProps,
    fullWidth: true,
    InputProps: {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={onClick}>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
    },
  };

  return <TextField variant="outlined" {...configTextField} />;
};

export default TextFieldTableSearch;
