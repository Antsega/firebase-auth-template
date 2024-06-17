import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { logoNoBackground, authBackground } from './assets';


// Basic Theme
let theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black
      light: '#BDBDBD', // Light Grey
      dark: '#424242', // Dark Grey
      contrastText: '#ffffff', // White
    },
    secondary: {
      main: '#757575', // Grey
    },
    error: {
      main: '#f44336', // Default red for error
    },
    // Additional color options
    warning: {
      main: '#ff9800', // Placeholder color for warning
    },
    info: {
      main: '#2196f3', // Placeholder color for info
    },
    success: {
      main: '#4caf50', // Placeholder color for success
    },
  },
  typography: {
    fontFamily: 'Outfit, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2.5rem', // 40px
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem', // 32px
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem', // 28px
      fontWeight: 500,
      lineHeight: 1.35,
    },
    h4: {
      fontSize: '1.5rem', // 24px
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem', // 20px
      fontWeight: 500,
      lineHeight: 1.45,
    },
    h6: {
      fontSize: '1rem', // 16px
      fontWeight: 500,
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 500,
      lineHeight: 1.57,
    },
    body1: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      lineHeight: 1.43,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 2.66,
      textTransform: 'uppercase',
    },
  },
  // Other theme options
  spacing: 8, // default spacing
  shape: {
    borderRadius: 4, // default border radius
  },
  // ... other global style overrides

});


theme = responsiveFontSizes(theme);



// Custom Styles that I will resuse across the components bc I don't feel like adding another file

export const authTextFieldStyle = () => ({
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    '& fieldset': {
      border: '1px solid #000000',
    },
    '&:hover fieldset': {
      border: '1px solid #000000',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid #000000',
    },
  },
  '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
    transform: 'translate(14px, -15px) scale(0.75)', // adjust for when the label shrinks
  },
});



export default theme;
