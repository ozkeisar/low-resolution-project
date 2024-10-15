import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

// Define your CSS variables
const cssVariables = {
  '--base-font-size': '16px',
  '--scale-factor': '0.1',
};

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
    // fontSize: 'var(--base-font-size)',
    h1: {
      fontSize: 'calc(2rem * var(--scale-factor))',
    },
    body1: {
      fontSize: 'calc(1.5rem * var(--scale-factor))',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': cssVariables,
        '@media (max-width: 1024px)': {
          ':root': {
            '--scale-factor': '0.875',
          },
        },
        '@media (min-width: 1920px)': {
          ':root': {
            '--scale-factor': '1.125',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 'calc(1rem * var(--scale-factor))',
          padding: 'calc(1rem * var(--scale-factor)) calc(1rem * var(--scale-factor))',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Box sx={{ p: 'calc(1rem * var(--scale-factor))' }}>
        <Typography variant="h1">Responsive MUI App</Typography>
        <Typography variant="body1" sx={{ mt: 'calc(1rem * var(--scale-factor))' }}>
          This content scales based on screen size using CSS variables and MUI theming.
        </Typography>
        <Button variant="contained" style={{borderRadius:'15px'}} sx={{ mt: 'calc(1rem * var(--scale-factor))' }}>
          Click Me
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;