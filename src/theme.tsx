import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#341f97',
    },
    secondary: {
      main: '#EA2027',
    },
    success: {
      main: '#29B665',
    },
    info: {
      main: '#eceff1',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1000,
      xl: 1200,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
        size: 'small',
        style: { fontSize: 14 },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: 'dense',
      },
    },
    MuiTableRow: {
      defaultProps: { hover: true },
    },
    MuiDialogTitle: {
      defaultProps: {
        style: {
          background: '#2980b9',
          color: '#fff',
          padding: '10px 20px',
        },
      },
    },
    MuiTableHead: {
      defaultProps: {
        style: { background: '#ECEFF1' },
      },
    },
    MuiDialogActions: {
      defaultProps: { style: { background: '#FAFAFA' } },
    },
    MuiTabs: {
      defaultProps: { style: { background: '#fafafa', borderRadius: 4 } },
    },
  },
  typography: {
    allVariants: {
      fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
        ','
      ),
    },
  },
});

export default theme;
