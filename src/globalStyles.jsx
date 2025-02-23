import { createGlobalStyle } from 'styled-components';

const colors = {
  primary: '#2973B2', // Blue
  secondary: '#B0C5D5', // Gray
  success: '#28A745', // Green
  danger: '#DC3545', // Red
  warning: '#FFC107', // Yellow
  info: '#17A2B8', // Teal
  light: '#F8F9FA', // Light gray
  dark: '#343A40', // Dark gray
  white: '#FFFFFF', // White
  black: '#000000', // Black
  background: '#F2F2F2',
};

const GlobalStyle = createGlobalStyle`
  :root {
    /* Define CSS variables for colors */
    --color-primary: ${colors.primary};
    --color-secondary: ${colors.secondary};
    --color-success: ${colors.success};
    --color-danger: ${colors.danger};
    --color-warning: ${colors.warning};
    --color-info: ${colors.info};
    --color-light: ${colors.light};
    --color-dark: ${colors.dark};
    --color-white: ${colors.white};
    --color-black: ${colors.black};
    --color-background: ${colors.background};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: var(--color-background);
    min-height: 100vh;
  }
`;

export default GlobalStyle;