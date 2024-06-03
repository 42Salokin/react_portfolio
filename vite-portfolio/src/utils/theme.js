import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008080', // Base primary color
    },
    secondary: {
      main: '#8FBC8F', // Base secondary color
    },
    text: {
        primary: '#fff', // White for primary text color
        secondary: '#ccc', // Light gray for secondary text color
      },
    background: {
        default: '#242424', // Set background color to #242424
      },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
    },
  },
});

export default theme;