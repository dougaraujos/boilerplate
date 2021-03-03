/**
 * IMPORTS
 */
import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { devices } from './devices';


/**
 * I am a global style.
 */
export default createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;

    @media ${devices.laptopL} {
      font-size: 15px;
    }

    @media ${devices.laptop} {
      font-size: 14px;
    }

    @media ${devices.tablet} {
      font-size: 13px;
    }
  }

  body {
    min-height: 100vh;
  }

  img {
    max-width: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    -webkit-box-shadow: none;
  }

  @-ms-viewport {
    width: device-width;
  }

  ${({ theme }) => css`
    body {
      background: ${theme.background};
      font: 400 1rem ${theme.fonts.primary};
    }

    *::selection {
      background: ${theme.primary};
    }

    *::-webkit-scrollbar {
      width: 0.5rem;
    }

    *::-webkit-scrollbar-track {
      border-radius: 40px;
      background: #0001;
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 40px;
      background-color: #2225;
      transition: background-color 0.3s ease-out;
    }

    *:hover::-webkit-scrollbar-thumb {
      background-color: #2228;
    }

    a {
      color: ${theme.primaryDark};
      font-weight: 500;
      text-decoration: none;
    }
  `}
`;
