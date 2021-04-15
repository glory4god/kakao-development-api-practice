/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import qs from 'querystring';
import FileUpLoader from './FileUpLoader';

const Container = styled.div`
  max-width: 1000px;
  min-width: 500px;

  input {
    margin-right: 0.5rem;
  }
  button {
    margin-right: 0.5rem;
  }
  .image {
    position: relative;
  }
  .image-grid {
    position: absolute;
    z-index: 1;
  }
`;

const FaceIdentification = () => {
  const [imageUrl, setImageUrl] = React.useState({
    image_url: '',
    threshold: 0.7,
  });
  const [face, setFace] = React.useState({
    x: null,
    y: null,
    w: null,
    h: null,
    sizex: null,
    sizey: null,
    faceAge: null,
    faceGender: '',
  });
  const [upLoading, setUpLoading] = React.useState(false);

  const PostImage = async (image) => {
    const response = await fetch(
      'https://dapi.kakao.com/v2/vision/face/detect',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
          Authorization: 'KakaoAK b74ee6269d85e4a59a5f84716fb0c1ea',
        },
        body: qs.stringify(image),
      },
    );

    if (!response.ok) {
      return window.alert('failed');
    }
    const resJson = await response.json();
    console.log(resJson);
    setFace({
      x: resJson.result.faces[0].x,
      y: resJson.result.faces[0].y,
      w: resJson.result.faces[0].w,
      h: resJson.result.faces[0].h,
      sizex: resJson.result.width,
      sizey: resJson.result.height,
      faceAge: resJson.result.faces[0].facial_attributes.age,
      faceGender: resJson.result.faces[0].facial_attributes.gender.male,
    });
    setUpLoading(true);
  };

  return (
    <Container>
      <div className="grid">
        <div>
          <h2>카카오 얼굴 식별 API</h2>
          {!upLoading && (
            <>
              <h3>이미지 url링크</h3>
              <input
                onChange={(e) =>
                  setImageUrl((prev) => ({
                    ...prev,
                    image_url: e.target.value,
                  }))
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    PostImage(imageUrl);
                  }
                }}
                value={imageUrl.image_url}></input>
              <input
                onChange={(e) =>
                  setImageUrl((prev) => ({
                    ...prev,
                    threshold: e.target.value,
                  }))
                }
                onKeyDown={(e) => {
                  if (e.key === 'enter') {
                    PostImage(imageUrl);
                  }
                }}
                value={imageUrl.threshold}></input>
              <button
                onClick={() => PostImage(imageUrl)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    PostImage(imageUrl);
                  }
                }}>
                post
              </button>
              <button
                onClick={() => (
                  setImageUrl({
                    image_url: '',
                    threshold: 0.7,
                    // eslint-disable-next-line no-sequences
                  }),
                  setFace([]),
                  setUpLoading(false)
                )}>
                reset
              </button>
              <FileUpLoader
                imageUrl={imageUrl}
                PostImage={PostImage}
                setImageUrl={setImageUrl}
                setUpLoading={setUpLoading}
              />
            </>
          )}
        </div>
      </div>
      {upLoading && (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <>
          <p>url : {imageUrl.image_url}</p>
          <p>threshold : {imageUrl.threshold}</p>
          <p>
            image size(x,y):{face.sizex}, {face.sizey}
          </p>
          <p>age:{Math.round(face.faceAge)}</p>
          <p>
            gender:{parseFloat(face.faceGender).toFixed(4) * 100}% (0%에
            가까우면 여자 100%에 가까우면 남자)
          </p>
          <button
            onClick={() => (
              // eslint-disable-next-line no-sequences
              setUpLoading(false),
              setFace([]),
              setImageUrl({
                image_url: '',
                threshold: 0.7,
              })
            )}>
            restart
          </button>
          <div className="image-grid">
            <div
              style={{
                zIndex: '2',
                position: 'absolute',
                height: `${face.sizey * face.h}px`,
                width: `${face.sizex * face.w}px`,
                top: `${100 * face.y}%`,
                left: `${100 * face.x}%`,
                border: '1.5px solid white',
              }}
            />
            <img
              className="image"
              src={imageUrl.image_url}
              width="100%"
              alt="image"></img>
          </div>
        </>
      )}
    </Container>
  );
};

export default FaceIdentification;
