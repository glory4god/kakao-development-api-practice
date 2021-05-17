import React from 'react';

const PageNumber = ({ page, pageList, setPageList }) => {
  const pageUpHandler = () => {
    if (pageList === page.length - 1) {
      window.alert('다음 페이지가 없어요');
    } else {
      setPageList((c) => c + 1);
    }
  };
  const pageDownHandler = () => {
    if (pageList === 0) {
      window.alert('이전 페이지가 없어요');
    } else {
      setPageList((c) => c - 1);
    }
  };
  return (
    <div style={{ textAlign: 'center', padding: '30px 0px' }}>
      <button onClick={pageDownHandler}>이전</button>
      {page.map((idx, key) => {
        return (
          <span key={key}>
            <button
              onClick={() => {
                setPageList(key);
              }}>
              {key + 1}
            </button>
          </span>
        );
      })}
      <button onClick={pageUpHandler}>다음</button>
    </div>
  );
};
export default PageNumber;
