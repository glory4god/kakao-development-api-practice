/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import qs from 'querystring';
import ProductInfo from './ProductInfo';

const Root = styled.section`
  .image-grid {
    position: relative;
    z-index: 1;
  }

  .image {
    position: relative;
  }
`;

const ProductDetect = () => {
  const [loading, setLoading] = React.useState(false);
  const [imageUrl, setIamgeUrl] = React.useState({
    image_url: '',
    threshold: 0.7,
  });

  const [product, setProduct] = React.useState([]);
  const [size, setSize] = React.useState({
    height: '',
    width: '',
  });

  const PostImage = async (image) => {
    const response = await fetch(
      'https://dapi.kakao.com/v2/vision/product/detect',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: 'KakaoAK b74ee6269d85e4a59a5f84716fb0c1ea',
        },
        body: qs.stringify(image),
      },
    );

    if (!response.ok) {
      return window.alert('failed');
    }

    setLoading(true);
    const resJson = await response.json();
    console.log(resJson);
    setProduct(resJson.result.objects);
    setSize({ height: resJson.result.height, width: resJson.result.width });
  };

  return (
    <Root>
      <h2>URL 입력</h2>
      <input
        onChange={(e) => {
          setIamgeUrl((prev) => ({
            ...prev,
            image_url: e.target.value,
          }));
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            PostImage(imageUrl);
          }
        }}
        value={imageUrl.image_url}></input>
      <button onClick={() => PostImage(imageUrl)}>post</button>
      <button
        onClick={() => (
          // eslint-disable-next-line no-sequences
          setLoading(false),
          setIamgeUrl((prev) => ({
            ...prev,
            image_url: '',
          }))
        )}>
        reset
      </button>
      <div className="image-grid">
        <ProductInfo product={product} size={size} />
        {loading && (
          <img
            className="image"
            src={imageUrl.image_url}
            alt="image"
            width="100%"
          />
        )}
      </div>
    </Root>
  );
};

export default ProductDetect;
