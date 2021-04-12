import React from 'react';
import About from './components/About';
import Home from './components/Home';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Profiles from './components/Profiles';
import HistorySample from './components/HistorySample';
import FaceIdentification from './components/FaceIdentification';

const Root = styled.div`
  padding: 0 4rem;
`;
const App = () => {
  return (
    <Root>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
        <li>
          <Link to="/faceindentification">얼굴 식별</Link>
        </li>
      </ul>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
      <Route path="/faceindentification" component={FaceIdentification} />
    </Root>
  );
};

export default App;
