import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import * as ThemeConsts from './theme/themeConsts';
import Header from './layout/Header';
import Container from './layout/Container';
import UsersPage from './pages/UsersPage';

const GlobalStyle = createGlobalStyle` 
    @import url(‘https://fonts.googleapis.com/css?family=:400,500,700');

    html,
    body {
        -webkit-text-size-adjust: 100%;
        font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: ${ThemeConsts.fontSizeDefault};
        color: ${ThemeConsts.greyShade3};
        background: ${ThemeConsts.greyShade10};
        text-align: center;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    #root {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }
    
    main {
        display: block;
    }
    
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }
    
    a {
        background-color: transparent;
        cursor: pointer;
    }  
    
    b,
    strong {
        font-weight: 500;
    }

    small {
        font-size: 80%;
    }
    
    img {
        border-style: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    } 
    
    button,
    input {
        overflow: visible;
    }

    button,
    select { 
        text-transform: none;
    }
    
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }
    
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }  
    
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }
    
    textarea {
        overflow: auto;
    }

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }
    
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }
    
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    
    [hidden] {
        display: none;
    }
`

const MainContent = styled.div`
  text-align: center;
  padding: ${ThemeConsts.spaceXXL} ${ThemeConsts.spaceL};
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <MainContent>
          <Container content={<UsersPage />} />
        </MainContent>
      </>
    );
  }
}

export default App;
