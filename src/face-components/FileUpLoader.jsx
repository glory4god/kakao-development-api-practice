/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import FacePreview from './FacePreview';

const Container = styled.section`
  .image {
    position: relative;
  }
  .image-grid {
    position: absolute;
    z-index: 1;
  }
`;

const FileUpLoader = () => {
  const file = new FormData();
  const [loading, setLoading] = React.useState(false);
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
  const [imageUrl, setImageUrl] = React.useState({
    image_url: '',
    threshold: '0.7',
  });

  const postFile = async (file) => {
    if (!file) {
      return window.alert('empty');
    }

    const response = await fetch(
      'https://dapi.kakao.com/v2/vision/face/detect',
      {
        method: 'POST',
        headers: {
          Authorization: 'KakaoAK b74ee6269d85e4a59a5f84716fb0c1ea',
        },
        body: file,
      },
    );
    if (!response.ok) {
      window.alert('failed');
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
    setLoading(true);
  };

  const onChange = (e) => {
    if (!e.target.files) {
      return;
    }
    const data = e.target.files[0];
    file.append('image', data);
    console.log(data);
  };
  return (
    <Container>
      {!loading ? (
        <>
          <h3>이미지 파일(png, jpg)</h3>
          <input type="file" onChange={onChange} />
          <button
            onClick={() => {
              postFile(file);
              setImageUrl({
                image_url: URL.createObjectURL(file.get('image')),
              });
            }}>
            post
          </button>
        </>
      ) : (
        <FacePreview
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          face={face}
          setLoading={setLoading}
          setFace={setFace}
        />
      )}
    </Container>
  );
};

export default FileUpLoader;
