import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      authBackground: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      authBackground?: string;
    };
  }
}
