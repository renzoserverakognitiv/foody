import React, { Component } from 'react';
import styled from 'styled-components';

const AppLogo = styled.img`
  height: 20px;
`;

class Logo extends Component { 
  render() {
    return (        
      <AppLogo src="img/logo.svg" alt="Foody" />
    );
  }
}

export default Logo;