import React from 'react';
import styled from 'styled-components';
const Root = styled.div`
  width: 800px;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px 5px;
  }
  .grid-box {
    height: 200px;
    border: 1px solid black;
  }
`;

const RestApiTest = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/get/company/kospi');
      const resJson = await response.json(response);
      console.log(resJson);
      resJson.forEach((element) => {
        setData((prev) => [...prev, element.name]);
      });
      console.log(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Root>
      {/* <h1>TEST API 정보</h1> */}
      {/* <div>
        {loading ? (
          'loading...'
        ) : (
          <p>
            {data.map((idx, key) => (
              <div key={idx + key}>{idx}</div>
            ))}
          </p>
        )}
      </div> */}
      <div className="grid">
        {arr.map((idx) => {
          return (
            <div className="grid-box">
              <div style={{ height: '155px', backgroundColor: 'red' }}></div>
              <div>
                이름 : <br />
                가격:
              </div>
            </div>
          );
        })}
      </div>
    </Root>
  );
};
export default RestApiTest;
