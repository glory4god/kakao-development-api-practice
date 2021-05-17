import React from 'react';
import About from './components/About';
import Home from './components/Home';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Profiles from './components/Profiles';
import FaceIdentification from './face-components/FaceIdentification';
import ProductDetect from './face-components/ProductDetect';
import LocationMain from './kakaomap-components/LocationMain';
import GuestBookMain from './guestbook-components/GuestBookMain';
import RestApiTest from './restapi-components/RestApiTest';
import Main from './shopping-component/Main';

const Root = styled.div`
  display: flex;
  .list {
    width: 500px;
  }
  .main {
    width: full;
  }
  .link {
    font-size: 1.25rem;
    color: black;
    text-decoration: none;
  }
  padding: 0 4rem;
`;

const App = () => {
  return (
    <Root>
      <div className="list">
        <ul>
          <li>
            <Link className="link" to="/">
              홈
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              소개
            </Link>
          </li>
          <li>
            <Link className="link" to="/profiles">
              example
            </Link>
          </li>
          <li>
            <Link className="link" to="/faceindentification">
              카카오 얼굴 식별
            </Link>
          </li>
          <li>
            <Link className="link" to="/productdetect">
              카카오 상품 검출
            </Link>
          </li>
          <li>
            <Link className="link" to="/location">
              중심위치 (카카오Map)
            </Link>
          </li>
          <li>
            <Link className="link" to="/guestbook">
              방명록 API
            </Link>
          </li>
          <li>
            <Link className="link" to="/restapitest">
              REST API TEST
            </Link>
          </li>
          <li>
            <Link className="link" to="/shopping">
              SHOPPING{' '}
            </Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/faceindentification" component={FaceIdentification} />
        <Route path="/productdetect" component={ProductDetect} />
        <Route path="/location" component={LocationMain} />
        <Route path="/guestbook" component={GuestBookMain} />
        <Route path="/restapitest" component={RestApiTest} />{' '}
        <Route path="/shopping" component={Main} />
      </div>
    </Root>
  );
};

export default App;
