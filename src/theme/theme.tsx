import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A89FF', // Ensure this is the correct blue you want
      dark: '#006FCC', // Optional: set a darker blue for hover effects
    },
    secondary: {
      main: '#ffffff', // For text, if needed
    },
  },
});

export default theme;
