/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';

const Root = styled.section`
  .image {
    position: relative;
  }
  .image-grid {
    position: absolute;
    z-index: 1;
  }
  button {
    margin: 0.5rem 0;
  }
`;

const ImagePreview = ({
  imageUrl,
  setImageUrl,
  face,
  setLoading,
  setFace,
  size,
}) => {
  const handleReset = () => (
    setImageUrl({
      image_url: '',
      threshold: 0.7,
    }),
    setFace([]),
    setLoading(false)
  );
  return (
    <Root>
      <p>url : {imageUrl.image_url}</p>
      <p>threshold : {imageUrl.threshold}</p>
      <p>
        image size(x,y):{size.w}, {size.h}
      </p>
      {face.map((item, key) => (
        <section key={key}>
          <div style={{ paddingBottom: '1px', fontWeight: 'bold' }}>
            number:{key}
          </div>
          <span style={{ paddingRight: '1rem' }}>
            age:{Math.round(item.facial_attributes.age)}
          </span>
          <span>
            gender:
            {parseFloat(item.facial_attributes.gender.male).toFixed(3) * 100}%
            (0%에 가까우면 여자 100%에 가까우면 남자)
          </span>
        </section>
      ))}

      <button
        onClick={handleReset}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            handleReset();
          }
        }}>
        restart
      </button>
      <div className="image-grid">
        {face.map((item, key) => (
          <>
            <div
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
          </>
        ))}
        <img
          className="image"
          src={imageUrl.image_url}
          width="100%"
          alt="image"></img>
      </div>
    </Root>
  );
};
export default ImagePreview;
