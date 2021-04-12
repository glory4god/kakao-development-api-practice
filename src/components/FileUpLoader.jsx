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

const FileUpLoader = ({ PostImage }) => {
  const [fileNames, setFileNames] = React.useState([]);

  const [imageFile, setImageFile] = React.useState({
    image: '',
    threshold: 0.7,
  });
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));
  return (
    <Container>
      <h3>이미지 파일(png, jpg)</h3>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default FileUpLoader;
