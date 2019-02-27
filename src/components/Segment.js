import React, { Component } from 'react';
import styled from 'styled-components';
import * as ThemeConsts from '../theme/themeConsts';

const SegmentWrapper = styled.div`
  background: #ffffff;
  padding: ${ThemeConsts.spaceXL};
  box-shadow: 0 1px 1px rgba(0, 0, 0, .15), 0 4px 8px rgba(0, 0, 0, .12);
  border-radius: 4px;
`;

const SegmentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: ${ThemeConsts.spaceXL}
`;

const SegmentTitle = styled.div`
  font-size: ${ThemeConsts.fontSizeTitle};
  font-weight: 700;  
`;

class Segment extends Component { 
  render() {
      const { content, title, headerToolset } = this.props;
    return (
        <SegmentWrapper>
            <SegmentHeader>
                <SegmentTitle>
                    {title}            
                </SegmentTitle>
                <div>
                    {headerToolset}
                </div>
            </SegmentHeader>
            {content}
        </SegmentWrapper>
    );
  }
}

export default Segment;