/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import qs from 'querystring';
import FileUpLoader from './FileUpLoader';
import FacePreview from './FacePreview';
import FaceInfo from './FaceInfo';

const Container = styled.div`
  input {
    margin-right: 0.5rem;
  }
  button {
    margin-right: 0.5rem;
  }
`;

const FaceIdentification = () => {
  const [imageUrl, setImageUrl] = React.useState({
    image_url: '',
    threshold: 0.7,
  });
  const [face, setFace] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [size, setSize] = React.useState({
    h: '',
    w: '',
  });

  const postImage = async (image) => {
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
    console.log(response);

    if (!response.ok) {
      return window.alert('failed');
    }
    const resJson = await response.json();
    console.log(resJson);
    setSize({ h: resJson.result.height, w: resJson.result.width });
    setFace(resJson.result.faces);
    setLoading(true);
    console.log(resJson.result);
  };
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      postImage(imageUrl);
    }
  };
  const handleReset = () => (
    setImageUrl({
      image_url: '',
      threshold: 0.7,
    }),
    setFace([]),
    setLoading(false)
  );

  return (
    <Container>
      <h2>카카오 얼굴 식별 API</h2>
      <div className="grid">
        <div>
          {!loading && (
            <>
              <h3>이미지 url링크</h3>
              <input
                onChange={(e) =>
                  setImageUrl((prev) => ({
                    ...prev,
                    image_url: e.target.value,
                  }))
                }
                onKeyDown={onKeyDown}
                value={imageUrl.image_url}></input>
              <input
                onChange={(e) =>
                  setImageUrl((prev) => ({
                    ...prev,
                    threshold: e.target.value,
                  }))
                }
                onKeyDown={onKeyDown}
                value={imageUrl.threshold}></input>
              <button onClick={() => postImage(imageUrl)}>post</button>
              <button onClick={handleReset}>reset</button>
              <FileUpLoader
                imageUrl={imageUrl}
                postImage={postImage}
                setImageUrl={setImageUrl}
                setLoading={setLoading}
              />
            </>
          )}
        </div>
        {loading && (
          <FacePreview
            size={size}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            face={face}
            setLoading={setLoading}
            setFace={setFace}
          />
        )}
      </div>
    </Container>
  );
};

export default FaceIdentification;
