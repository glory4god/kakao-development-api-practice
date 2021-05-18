/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import FaceInfo from './FaceInfo';

const Root = styled.div`
  .image-box {
    position: relative;
    z-index: 1;
  }
  .image {
    position: relative;
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
      <div className="image-box">
        <FaceInfo face={face} size={size} />
        <img
          className="image"
          src={imageUrl.image_url}
          width="100%"
          alt="image"
        />
      </div>
      <div>
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
      </div>
    </Root>
  );
};
export default ImagePreview;
