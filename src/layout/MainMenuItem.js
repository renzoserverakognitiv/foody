import React, { Component } from 'react';
import * as ThemeConsts from '../theme/themeConsts';
import styled from 'styled-components';
import MenuItemIcon from '../layout/MainMenuIcon';

const MainMenuItemWrapper = styled.div`
    margin-left: ${ThemeConsts.spaceM};
    height: ${ThemeConsts.spaceXXXL};
    border-radius: ${ThemeConsts.spaceXXXL};
    padding: 0 ${ThemeConsts.spaceL};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    transition: all .2s;
    cursor: default;
    color: ${props => props.active 
            ? ThemeConsts.mainColorShade10 
            : ThemeConsts.mainColorShade6
          };   
    fill: ${props => props.active 
            ? ThemeConsts.mainColorShade10 
            : ThemeConsts.mainColorShade6
          };  
    background: ${props => props.active 
                  ? ThemeConsts.mainColorShade6 
                  : "transparent"
                };
    box-shadow: ${props => props.active 
                  ? "0 1px 1px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .07)" 
                  : "none"
                }; 

    ${props => props.active}:hover {
        background: ${ThemeConsts.mainColorShade10};
        box-shadow: 0 1px 1px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .07);
        cursor: pointer;
        transition: all .2s;
        color: ${ThemeConsts.mainColorShade4};
        fill: ${ThemeConsts.mainColorShade4}; 
    }
`;

const MenuItemIconWrapper = styled.span`
    opacity: .7;
`;

const MenuItemContent = styled.span`
    margin-left: ${ThemeConsts.spaceS};
`;

class MainMenuItem extends Component {     
  render() {
    const { content, icon, active } = this.props;
    return (
      <MainMenuItemWrapper active={active}>
        <MenuItemIconWrapper>
          <MenuItemIcon 
              name={icon}
              size={ThemeConsts.fontSizeSubtitleLarge}
          />
        </MenuItemIconWrapper>
        <MenuItemContent>{content}</MenuItemContent>
      </MainMenuItemWrapper>
    );
  }
}

export default MainMenuItem;