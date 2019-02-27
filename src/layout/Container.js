import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  text-align: left;
  margin: auto;
`;

class Container extends Component {  
  render() {
    const { content } = this.props;
    return (
      <ContainerWrapper>
        {content}
      </ContainerWrapper>
    );
  }
}

export default Container;