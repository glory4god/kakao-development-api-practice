import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  .main {
    background-color: black;
    color: white;
  }
  .submain {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Test = () => {
  return (
    <Root>
      <h1 className="main">테스트 문서입니다</h1>
      <p className="submain">리액트 참 재밌네</p>
    </Root>
  );
};

export default Test;
