import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  .title {
    font-size: 2rem;
  }
`;

const GuestBookMain = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://youngari.kay.kr/api/board');
      const resJson = await response.json();
      setData(resJson);
      console.log(response);
      console.log(resJson);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Root>
      <div className="title">GUESTBOOK</div>
      <div>{loading && <>loading...</>}</div>
      {data.map((arr, idx) => {
        return (
          <div key={arr._id}>
            {idx + 1} : {arr.name} / {arr.title}
          </div>
        );
      })}
    </Root>
  );
};

export default GuestBookMain;
