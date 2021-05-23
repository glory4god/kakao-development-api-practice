import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const StyledPaper = styled(Paper)`
  width: 100%;
  max-width: 1080px;
  height: 60px;
  position: fixed;
  padding-top: 1rem;
  margin: 0 auto;
  z-index: 2;
  background-color: white;

  .title {
    font-size: 28px;
    font-weight: bold;
    padding-left: 1rem;
  }
`;

const TopMenubar = () => {
  return (
    <StyledPaper elevation={4}>
      <div className="title">HAYOUNG</div>
    </StyledPaper>
  );
};

export default TopMenubar;
