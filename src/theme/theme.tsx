import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B2430', // Ensure this is the correct blue you want
      dark: '#0A89FF', // Optional: set a darker blue for hover effects
    },
    secondary: {
      main: '#ffffff', // For text, if needed
    },
  },
});

export default theme;
