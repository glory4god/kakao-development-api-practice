import React from 'react';
import Button from '@material-ui/core/Button';

const FindingKakaoMap = ({ centerPoint }) => {
  React.useEffect(() => {
    const container = document.getElementById('map');

    const markerPosition = new window.kakao.maps.LatLng(
      centerPoint[1],
      centerPoint[2],
    );

    const options = {
      center: markerPosition,
      level: 6,
    };

    const map = new window.kakao.maps.Map(container, options);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    const iwContent = `<div style="max-width:250px; padding:5px;">${centerPoint}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new window.kakao.maps.LatLng(
        centerPoint[1] + 0.003,
        centerPoint[2],
      ), //인포윈도우 표시 위치입니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // eslint-disable-next-line no-unused-vars
    const infowindow = new window.kakao.maps.InfoWindow({
      map: map, // 인포윈도우가 표시될 지도
      position: iwPosition,
      content: iwContent,
      removable: iwRemoveable,
    });
    console.log(centerPoint);

    marker.setMap(map);
  }, [centerPoint]);
  return (
    <div>
      <div style={{ width: '500px', height: '400px' }} id="map"></div>
      <a
        href={`https://map.kakao.com/link/to/${centerPoint[0]},${centerPoint[1]},${centerPoint[2]}`}>
        <Button>길찾기</Button>
      </a>
    </div>
  );
};
export default FindingKakaoMap;
