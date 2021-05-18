import React from 'react';
import About from '../components/About';
import Home from '../components/Home';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Profiles from '../components/Profiles';
import FaceIdentification from '../face-components/FaceIdentification';
import ProductDetect from '../face-components/ProductDetect';
import LocationMain from '../kakaomap-components/LocationMain';
import GuestBookMain from '../guestbook-components/GuestBookMain';
import RestApiTest from '../restapi-components/RestApiTest';
import Main from '../shopping-component/Main';
import Paper from '@material-ui/core/Paper';

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
  padding-top: 5rem;
  .list {
    padding: 16px 24px;
  }
  .main {
    padding: 16px 24px;
  }
  .link-div {
    height: 36px;
  }
  .link {
    font-size: 1.25rem;
    color: black;
    text-decoration: none;
  }
`;
const HomePage = () => {
  return (
    <Root>
      <Paper className="list" elevation={3}>
        <div>
          <div className="link-div">
            <Link className="link" to="/">
              홈
            </Link>
          </div>
          <div className="link-div">
            <Link className="link" to="/about">
              소개
            </Link>
          </div>

          <div className="link-div">
            <Link className="link" to="/faceindentification">
              카카오 얼굴 식별
            </Link>
          </div>
          <div className="link-div">
            <Link className="link" to="/productdetect">
              카카오 상품 검출
            </Link>
          </div>
          <div className="link-div">
            <Link className="link" to="/location">
              중심위치 (카카오Map)
            </Link>
          </div>
          <div className="link-div">
            <Link className="link" to="/guestbook">
              방명록 API
            </Link>
          </div>
          <div className="link-div">
            <Link className="link" to="/restapitest">
              REST API TEST
            </Link>
          </div>
          <div className="link-div">
            <Link className="link" to="/shopping">
              SHOPPING
            </Link>
          </div>
          <div className="link-div">
            <Link className="link" to="/profiles">
              test 공간
            </Link>
          </div>
        </div>
      </Paper>
      <Paper className="main" elevation={2}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/faceindentification" component={FaceIdentification} />
        <Route path="/productdetect" component={ProductDetect} />
        <Route path="/location" component={LocationMain} />
        <Route path="/guestbook" component={GuestBookMain} />
        <Route path="/restapitest" component={RestApiTest} />
        <Route path="/shopping" component={Main} />
      </Paper>
    </Root>
  );
};

export default HomePage;
