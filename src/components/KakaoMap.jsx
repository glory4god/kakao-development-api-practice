import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

const KakaoMap = () => {
  React.useEffect(() => {
    const container = document.getElementById('map');

    const markerPosition = new window.kakao.maps.LatLng(37.5351, 126.90067);
    const options = {
      center: markerPosition,
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return (
    <Root>
      <div style={{ width: '500px', height: '400px' }} id="map" />
    </Root>
  );
};
export default KakaoMap;
