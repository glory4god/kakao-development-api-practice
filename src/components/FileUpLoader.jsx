import React from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

const Container = styled.section`
  .dropzone {
    background-color: #d8d8d8;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
  }
`;

const FileUpLoader = ({ imageUrl, PostImage, setImageUrl, setUpLoading }) => {
  const handleDrop = React.useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImageUrl((prev) =>
        Object.assign(imageUrl, {
          ...prev,
          image_url: URL.createObjectURL(file),
        }),
      );
      setUpLoading(true);

      // acceptedFiles.forEach((file) => {
      //   const reader = new FileReader();
      //   reader.onabort = () => console.log('file reading was abortded');
      //   reader.onerror = () => console.log('file reading was failed.');
      //   reader.readAsDataURL(file);
      //   reader.onload = (e) => {
      //     const url = reader.result;
      //     setImageUrl((prev) => ({
      //       ...prev,
      //       image_url: url,
      //     }));
      //     PostImage(imageUrl);
      //   };
      // });
    },
    [imageUrl, setImageUrl, setUpLoading],
  );

  React.useEffect(
    () => () => {
      URL.revokeObjectURL(imageUrl.image_url);
    },
    [imageUrl],
  );

  // const modalImageRef = React.useRef();

  return (
    <Container>
      <h3>이미지 파일(png, jpg)</h3>
      <Dropzone accept="image/*" onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
    </Container>
  );
};

export default FileUpLoader;
