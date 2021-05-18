import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const StyledPaper = styled(Paper)`
  height: 70px;
  margin: 5px 0;
  .layout {
    position: relative;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
  }
  .button {
    position: absolute;
    right: 10px;
  }
`;

const ListLayout = React.memo(({ arr, onClick }) => {
  return (
    <StyledPaper elevation={3}>
      <div className="layout">
        <div style={{ fontWeight: 'bold' }}>{arr.placeName}</div>
        <div>{arr.address}</div>
        <div>{arr.category}</div>
        <button className="button" onClick={() => onClick(arr)}>
          추가
        </button>
      </div>
    </StyledPaper>
  );
});

export default ListLayout;
