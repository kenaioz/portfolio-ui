import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoint";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BLACK};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    outline: none;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      font-size: 14px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 12px;
    }

  }

  h1 {
    font-size: 2rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      font-size: 1.75rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.5rem;
    }

  }

  h2 {
    
  }

  h3 {
    
  }

  h1, h2, h3, label {
    font-family: 'Poppins', sans-serif;
    outline: none;
  }



  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover, a:hover {
    filter: brightness(0.7);
  }
`;
