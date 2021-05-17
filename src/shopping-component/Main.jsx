import React from 'react';

import styled from 'styled-components';
import ItemList from './ItemList';
import PageNumber from './PageNumber';

const Root = styled.div``;

const Main = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const page = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
  ];
  const [pageList, setPageList] = React.useState(0);

  return (
    <Root>
      <div style={{ textAlign: 'right', padding: '30px 0px' }}>
        <input></input>
        <button>검색</button>
      </div>
      <ItemList arr={page[pageList]} />
      <PageNumber page={page} pageList={pageList} setPageList={setPageList} />
    </Root>
  );
};

export default Main;
