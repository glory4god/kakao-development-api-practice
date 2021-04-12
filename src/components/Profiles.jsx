import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <div>
        <h3>유저목록</h3>
        <ul>
          <li>
            <Link to="/profiles/hayoung">hayoung</Link>
          </li>
          <li>
            <Link to="/profiles/gildong">gildong</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/profiles"
        exact={true}
        render={() => <div>유저를 선택하세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
