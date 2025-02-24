import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

${'' /* CSS Variables */}

:root{
    /* Colors */
    --primary: #6a0dad;
    --secondary: #af73cf;
    --tertiary: #f7c5cc;
    --background: #f7f7f7;
    --text: #333;
    --text-light: #fff;
    --text-dark: #000;
    --text-muted: #999;
    --border: #ddd;
    --border-dark: #333;
    --border-light: #f7f7f7;
    --shadow: rgba(0,0,0,0.1);
    --shadow-dark: rgba(0,0,0,0.2);
    --shadow-light: rgba(0,0,0,0.05);
    --success: #28a745;
    --danger: #dc3545;
    --warning: #ffc107;
    --info: #17a2b8;
    --light: #f8f9fa;
    --dark: #343a40;
}

${'' /* CSS Reset */}
  *,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
html{
  ${"" /* overflow-y: scroll; */}
  scroll-behavior:smooth;
  
}
    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
            }
    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);
        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img,svg{
        width:100%;
        height:auto;
    }`;

export default GlobalStyle;