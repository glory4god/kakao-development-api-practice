import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const Root = styled(Paper)`
  font-family: sans-serif;
  height: 60px;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px 0;

  .userlist {
    flex-direction: column;
  }
`;
const UserList = React.memo(({ idx, key }) => {
  return (
    <Root elevation={3}>
      <div className="userlist">
        <div>
          id : {key + 1}, keyword : {idx[0]}
        </div>
        <div>
          x: {idx[1]}, y: {idx[2]}
        </div>
      </div>
    </Root>
  );
});

export default UserList;
