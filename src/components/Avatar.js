import React, { Component } from 'react';
import styled from 'styled-components';
import * as ThemeConsts from '../theme/themeConsts';

const AvatarWrapper = styled.div`  
  display: inline-block;
  height: ${props => props.size};
  width: ${props => props.size};
  line-height: ${props => props.size};
  text-align: center;
  background: ${ThemeConsts.mainColorShade10};
  color: ${ThemeConsts.mainColorShade7};
  font-weight: 500;  
  border-radius: 50%;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, .1);
`;

class Avatar extends Component {
  render() {
    const { size } = this.props;
    return (
        <AvatarWrapper size={size}>
            RS
        </AvatarWrapper>
    );
  }
}

export default Avatar;