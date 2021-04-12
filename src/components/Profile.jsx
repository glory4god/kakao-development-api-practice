import React from 'react';

const profileData = {
  hayoung: {
    name: '유하영',
    age: '26',
  },
  gildong: {
    name: '홍길동',
    age: '30',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않은 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.age}</p>
    </div>
  );
};

export default Profile;
