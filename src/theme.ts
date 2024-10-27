// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2', light: '#63a4ff', dark: '#004ba0', contrastText: '#ffffff' },
    secondary: { main: '#dc004e', light: '#ff5c8d', dark: '#9a0036', contrastText: '#ffffff' },
    error: { main: '#f44336', light: '#e57373', dark: '#d32f2f' },
    warning: { main: '#ff9800', light: '#ffc947', dark: '#f57c00' },
    info: { main: '#2196f3', light: '#64b5f6', dark: '#1976d2' },
    success: { main: '#4caf50', light: '#81c784', dark: '#388e3c' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
    text: { primary: '#333333', secondary: '#666666', disabled: '#9e9e9e' },
    divider: '#bdbdbd',
  },

  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontSize: '2.5rem', fontWeight: 600, lineHeight: 1.2 },
    h2: { fontSize: '2rem', fontWeight: 500 },
    h3: { fontSize: '1.75rem', fontWeight: 500 },
    h4: { fontSize: '1.5rem', fontWeight: 500 },
    h5: { fontSize: '1.25rem', fontWeight: 400 },
    h6: { fontSize: '1rem', fontWeight: 400 },
    body1: { fontSize: '1.6rem' },
    body2: { fontSize: '0.875rem' },
    button: { textTransform: 'none' },
  },

  spacing: '1rem',
  shape: { borderRadius: 8 },
  breakpoints: { values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 } },
  zIndex: { mobileStepper: 1000, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 },

  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195,
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: { backgroundColor: '#1976d2' },
      },
    },
    MuiButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 8 },
        containedPrimary: { backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#115293' } },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 12, boxShadow: '0px 2px 10px rgba(0,0,0,0.15)' },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { padding: '16px', borderRadius: 12 },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { width: 240, backgroundColor: '#1976d2', color: '#ffffff' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: { boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)' },
        rounded: { borderRadius: 8 },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: { fontSize: '0.875rem', backgroundColor: '#333' },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: { borderCollapse: 'separate', borderSpacing: '0 8px' },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined', margin: 'normal' },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: { marginBottom: '0.5rem' },
      },
    },
  },

//   props: {
//     MuiButton: {
//       variant: 'contained', color: 'primary', size: 'medium',
//     },
//     MuiTextField: {
//       variant: 'outlined', fullWidth: true,
//     },
//     MuiPaper: {
//       elevation: 3,
//     },
//     MuiLink: {
//       underline: 'hover',
//     },
//     MuiTooltip: {
//       arrow: true,
//     },
//     MuiUseMediaQuery: {
//       noSsr: true,
//     },
//   },
});

export default theme;
