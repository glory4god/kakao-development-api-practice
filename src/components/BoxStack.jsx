import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .box-left-container {
    min-height: 800px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .box-right-container {
    min-height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const BoxStack = () => {
  const [boxList, setBoxList] = React.useState([]);
  const [temp, setTemp] = React.useState(0);
  const [popList, setPopList] = React.useState([]);

  const onChange = (e) => {
    setTemp(e.target.value);
  };

  return (
    <Root>
      <div>
        <div>
          <input
            type="number"
            min={1}
            max={5}
            onChange={onChange}
            value={temp}
          />
          <button onClick={() => setBoxList(() => [...boxList, temp])}>
            상자쌓기!
          </button>
        </div>
        <div className="box-left-container">
          {boxList.map((arr, idx) => (
            <div
              className="box"
              style={{
                width: `${arr * 2}rem`,
                height: `${arr * 2}rem`,
                border: '2px solid black',
                backgroundColor: `${color[arr - 1]}`,
              }}
              onClick={() => {
                boxList.splice(idx, 1);
                setPopList(() => [...popList, arr]);
              }}>
              <div className="text">{arr}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="box-right-container">
        {popList.map((arr, idx) => (
          <div
            className="box"
            style={{
              width: `${arr * 2}rem`,
              height: `${arr * 2}rem`,
              border: '2px solid black',
              backgroundColor: `${color[arr - 1]}`,
            }}
            onClick={() => {
              popList.splice(idx, 1);
            }}>
            <div className="text">{arr}</div>
          </div>
        ))}
      </div>
    </Root>
  );
};

export default BoxStack;

const color = ['red', 'blue', 'green', 'yellow', 'orange'];
