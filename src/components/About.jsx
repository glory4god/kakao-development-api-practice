import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>리액트를 이용한 실습들을 정리한 공간입니다.</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고 ...</p>}
    </div>
  );
};

export default About;
