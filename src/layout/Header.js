import React, { Component } from 'react';
import styled from 'styled-components';
import * as ThemeConsts from '../theme/themeConsts';
import Logo from '../components/Logo';
import MainMenu from '../layout/MainMenu';
import UserProfileTrigger from '../layout/UserProfileTrigger';

const HeaderWrapper = styled.div`
  background: #ffffff;
  border-top: ${ThemeConsts.spaceXXS} solid ${ThemeConsts.redShade7};
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${ThemeConsts.spaceL};
  box-shadow: 0 1px 1px rgba(0, 0, 0, .025), 0 4px 8px rgba(0, 0, 0, .15);
`;

class Header extends Component { 
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <MainMenu />
        <UserProfileTrigger />
      </HeaderWrapper>
    );
  }
}

export default Header;