import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  background-color: black;
  color: white;
`;

const GuestBookMain = () => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    try {
      const response = await fetch('https://youngari.kay.kr/api/board');
      const resJson = await JSON.stringify(response);
      setData(resJson);
    } catch (err) {
    } finally {
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Root>
      <div>GUESTBOOK</div>
      <div>{data}</div>
    </Root>
  );
};

export default GuestBookMain;
