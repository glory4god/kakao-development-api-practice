import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Root = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 25px 15px;
  }
  .grid-box {
    height: 200px;
    border: 1px solid black;
  }
  .image {
    background-repeat: none;
    background-size: cover;
  }
`;

const ItemList = React.memo(({ arr }) => {
  return (
    <Root>
      <div className="grid">
        {arr.map((idx, key) => {
          return <Item idx={idx} key={key}></Item>;
        })}
      </div>
    </Root>
  );
});
export default ItemList;
