import React from 'react';
import styled from 'styled-components';
import ListLayout from './ListLayout';
import UserList from './UserList';

const Root = styled.div`
  display: flex;
`;

const SearchingKakaoMap = ({
  centerPoint,
  setCenterPoint,
  setCalculateHandler,
}) => {
  const [keyWord, setKeyWord] = React.useState('강남역');
  const [temp, setTemp] = React.useState('');
  const [markerList, setMarkerList] = React.useState([]);
  const [keyWordList, setKeyWordList] = React.useState([]);

  const onClick = (list) => {
    setMarkerList((markerList) => [
      ...markerList,
      [list.placeName, list.y, list.x],
    ]);
  };

  const onChange = (e) => {
    setTemp(() => e.target.value);
  };
  const calculateCenter = React.useCallback(
    (location) => {
      var x = 0,
        y = 0;
      location.forEach((element) => {
        x = x + parseFloat(element[1]);
        y = y + parseFloat(element[2]);
      });
      setCenterPoint([
        location[0][0],
        x / location.length,
        y / location.length,
      ]);
      setCalculateHandler(false);
      setMarkerList([]);
      console.log('calculate');
    },
    [setCalculateHandler, setCenterPoint],
  );

  React.useEffect(() => {
    setKeyWordList([]);
    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    const container = document.getElementById('map');

    const markerPosition = new window.kakao.maps.LatLng(
      37.495320788758555,
      127.02945006889847,
    );

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

        console.log(data);

        for (var i = 0; i < data.length; i++) {
          setKeyWordList((prev) => [
            ...prev,
            {
              id: data[i].id,
              address: data[i].address_name,
              category: data[i].category_group_name,
              placeName: data[i].place_name,
              url: data[i].place_url,
              x: data[i].x,
              y: data[i].y,
            },
          ]);
          displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }
        console.log(keyWordList);

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
        setMarkerList([...markerList, [place.place_name, place.y, place.x]]);

        infowindow.open(map, marker);
      });
    };
    ps.keywordSearch(keyWord, placesSearchCB);
  }, [calculateCenter, keyWord, markerList]);

  return (
    <Root>
      <div>
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
        {markerList.length !== '' &&
          markerList.map((idx, key) => <UserList idx={idx} key={key} />)}
        <button onClick={() => calculateCenter(markerList)}>계산</button>
        {centerPoint}
      </div>
      <div style={{ paddingLeft: '20px' }}>
        {keyWordList.map((arr) => {
          return <ListLayout key={arr.id} arr={arr} onClick={onClick} />;
        })}
      </div>
    </Root>
  );
};
export default SearchingKakaoMap;
