import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  font-size: 2rem;
  .showing {
    color: blue;
  }
  .notshowing {
    color: white;
  }
`;

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState('showing');

  const upHandler = () => {
    setCount((c) => c + 1);
  };

  const downHandler = () => {
    setCount((c) => c - 1);
  };

  const resetHandler = () => {
    setCount(0);
    setShow('showing');
  };

  const loadingHandler = () => {
    setLoading((c) => !c);
  };

  return (
    <Root>
      {count > 5 && <div>{count}</div>}
      {/* {loading ? (
        <p style={{ fontSize: '100px', color: 'red' }}>loading...</p>
      ) : (
        <p>ok</p>
      )} */}
      <p className={show}>OK</p>
      <p style={loading ? { fontSize: '50px' } : { fontSize: '100px' }}>OK</p>
      <button onClick={upHandler}>up</button>
      <button onClick={downHandler}>down</button>
      <button onClick={resetHandler}>reset</button>
      <button onClick={loadingHandler}>
        {loading ? 'loading...' : '똥컴이네'}
      </button>
      <button onClick={() => setShow('notshowing')}>showbutton</button>
    </Root>
  );
};

export default Counter;
