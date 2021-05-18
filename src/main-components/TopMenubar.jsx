import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: absolute;
  top: 20px;
  padding-left: 1rem;
`;

const TopMenubar = () => {
  return (
    <Root>
      <div style={{ fontSize: '28px', fontWeight: 'bold' }}>HAYOUNG</div>
    </Root>
  );
};

export default TopMenubar;
