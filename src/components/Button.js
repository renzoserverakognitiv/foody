import React, { Component } from 'react';
import styled from 'styled-components';
import * as ThemeConsts from '../theme/themeConsts';

const ButtonWrapper = styled.span`
    background: ${ThemeConsts.mainColorShade7};
    color: ${ThemeConsts.mainColorShade10};
`;

class Button extends Component {
    render() {
        const { content } = this.props;
        return (
            <ButtonWrapper>
                {content}
            </ButtonWrapper>
        );
    }
}

export default Button;