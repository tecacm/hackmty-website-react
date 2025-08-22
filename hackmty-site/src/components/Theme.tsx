import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const Theme = createTheme({
  palette: {
    primary: {
      main: '#222222', // gray
    },
    secondary: {
      main: '#662d91', // purple
    },
  },
  typography: {
    fontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
    },
  },
  components: {
    MuiToolbar: {
        styleOverrides: {
            regular: {
                height: 85,
                minHeight: 32
            }
        }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active': {
            color: "#ffffffff", // Active step color
            
          },
          // Default/inactive color
          color: '#e4e4e4ff',
          '& text': {
            fill: '#662d91', // <-- number inside circle
            fontWeight: '600'
          },
        },
        
      },
    },
  }
});

export default Theme;
