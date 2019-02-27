import React, { Component } from 'react';
import styled from 'styled-components';
import * as ThemeConsts from '../theme/themeConsts';
import MainMenuItem from '../layout/MainMenuItem';

const MainMenuWrapper = styled.div`
  display: flex;
  margin-left: -${ThemeConsts.spaceM}
`;

class MainMenu extends Component {
  render() {
    return (
      <MainMenuWrapper>
        <MainMenuItem 
          content="Pedido" 
          icon="order" 
          active 
        />
        <MainMenuItem 
          content="Usuarios" 
          icon="users"  
          active={false} 
        />
        <MainMenuItem 
          content="Empresas" 
          icon="company"  
          active={false}
        />
      </MainMenuWrapper>
    );
  }
}

export default MainMenu;