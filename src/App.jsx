import React from 'react';
import styled from 'styled-components';
import HomePage from './main-components/HomePage';
import TopMenubar from './main-components/TopMenubar';

const Root = styled.div`
  position: relative;
  max-width: 1080px;
  min-height: 760px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const App = () => {
  return (
    <Root>
      <TopMenubar />
      <HomePage />
    </Root>
  );
};

export default App;
