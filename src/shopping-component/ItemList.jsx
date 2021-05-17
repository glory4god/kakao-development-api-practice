import React from 'react';
import styled from 'styled-components';
const Root = styled.div`
  width: 800px;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px 5px;
  }
  .grid-box {
    height: 200px;
    border: 1px solid black;
  }
`;

const ItemList = ({ arr }) => {
  return (
    <Root>
      <div className="grid">
        {arr.map((idx) => {
          return (
            <div className="grid-box">
              <div style={{ height: '155px', backgroundColor: 'red' }}></div>
              <div>
                이름 : {idx}
                <br />
                가격:
              </div>
            </div>
          );
        })}
      </div>
    </Root>
  );
};
export default ItemList;
