import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;
const ProductInfo = ({ product, size }) => {
  return (
    <Root>
      {product.map((item, key) => (
        <div
          key={item + key}
          style={{
            zIndex: '2',
            position: 'absolute',
            height: `${size.height * (item.y2 - item.y1)}px`,
            width: `${size.width * (item.x2 - item.x1)}px`,
            top: `${100 * item.y1}%`,
            left: `${100 * item.x1}%`,
            border: '2px solid white',
            color: 'white',
            fontSize: '0.8rem',
          }}>
          <span style={{ backgroundColor: 'black' }}>{item.class}</span>
        </div>
      ))}
    </Root>
  );
};

export default ProductInfo;
