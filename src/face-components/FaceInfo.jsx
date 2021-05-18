import React from 'react';

const FaceInfo = ({ face, size }) => {
  console.log(size.h);
  console.log(face[0].h);
  return (
    <>
      {face.map((item, key) => (
        <div
          key={key + 'image'}
          style={{
            zIndex: '2',
            position: 'absolute',
            height: `${size.h * item.h}px`,
            width: `${size.w * item.w}px`,
            top: `${100 * item.y}%`,
            left: `${100 * item.x}%`,
            border: '1.5px solid white',
            fontSize: '0.6rem',
            color: 'white',
          }}>
          <span style={{ backgroundColor: 'black' }}>{key}</span>
        </div>
      ))}
    </>
  );
};

export default FaceInfo;
