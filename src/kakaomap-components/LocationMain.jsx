import React from 'react';
import FindingKakaoMap from './FindingKakaoMap';
import SearchingKakaoMap from './SearchingKakaoMap';

const LocationMain = () => {
  const [searching, setSearching] = React.useState(false);
  const [finding, setFinding] = React.useState(false);
  const [centerPoint, setCenterPoint] = React.useState([
    127.0297696476572,
    37.49699028030376,
  ]);
  const [calculateHandler, setCalculateHandler] = React.useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setSearching((c) => !c);
          setFinding(false);
          setCenterPoint([]);
          setCalculateHandler(true);
        }}>
        {searching ? '돌아가기' : '위치 검색'}
      </button>
      <button
        disabled={calculateHandler}
        onClick={() => {
          setFinding((c) => !c);
          setSearching(false);
        }}>
        {finding ? '돌아가기' : '중심위치 검색'}
      </button>
      {searching && (
        <SearchingKakaoMap
          centerPoint={centerPoint}
          setCenterPoint={setCenterPoint}
          setCalculateHandler={setCalculateHandler}
        />
      )}
      {finding && <FindingKakaoMap centerPoint={centerPoint} />}
    </div>
  );
};

export default LocationMain;
