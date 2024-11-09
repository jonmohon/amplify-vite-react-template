import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A89FF', // Main blue color
    },
    background: {
      default: '#ffffff', // White background for the main content
      paper: '#0A89FF', // Sidebar background
    },
    text: {
      primary: '#ffffff', // White text for better contrast
    },
  },
});

export default theme;
