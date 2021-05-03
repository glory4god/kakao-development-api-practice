import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

const KakaoMap = () => {
  const [keyWord, setKeyWord] = React.useState('강남역');
  const [temp, setTemp] = React.useState('');
  React.useEffect(() => {
    var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

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

    const ps = new window.kakao.maps.services.Places();

    const placesSearchCB = (data, status, pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new window.kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    };

    const displayMarker = (place) => {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      window.kakao.maps.event.addListener(marker, 'click', () => {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            '</div>',
        );
        infowindow.open(map, marker);
      });
    };
    ps.keywordSearch(keyWord, placesSearchCB);
  }, [keyWord]);

  const onChange = (e) => {
    setTemp(() => e.target.value);
  };

  return (
    <Root>
      <div style={{ width: '500px', height: '400px' }} id="map" />
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setKeyWord(temp);
            setTemp('');
          }
        }}
        type="text"
        value={temp}
        onChange={onChange}
      />
      <button
        onClick={() => {
          setKeyWord(temp);
          setTemp('');
        }}>
        확인
      </button>
    </Root>
  );
};
export default KakaoMap;
