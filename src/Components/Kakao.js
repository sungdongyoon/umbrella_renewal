import React, { useEffect, useState } from 'react';
import { Map, MapMarker, MapTypeControl, ZoomControl} from 'react-kakao-maps-sdk';
import EventMarker from './EventMarker';
import { getMapImg } from './util';
import styled from 'styled-components';

const Button = styled.button`
  width: 60px;
  height: 50px;
  position: absolute;
  bottom: 3%;
  right: 3%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Kakao = () => {
  // 따릉이
  const BIKE_API_KEY = process.env.REACT_APP_BIKE_API;

  const [bikeData, setBikeData] = useState([]);
  const getBikeData = async() => {
    let res = await fetch(`http://openapi.seoul.go.kr:8088/${BIKE_API_KEY}/json/tbCycleStationInfo/1/200/`);
    let data = await res.json();
    console.log(data);
    setBikeData(data.stationInfo.row);
  }

  useEffect(() => {
    getBikeData();
  }, []);

  // 카카오 지도
  const [position, setPosition] = useState({
    center: {
      lat: 37.55274582,
      lng: 126.91861725,
    },
    error: null,
    isLoading: true,
  });

  const [currentPosition, setCurrentPosition] = useState({
    center: {
      lat: position.center.lat,
      lng: position.center.lng
    }
  })

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition((prev) => ({
          ...prev,
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          isLoading: false,
        }))
      },
        (err) => {
          setPosition((prev) => ({
            ...prev,
            error: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      setPosition((prev) => ({
        ...prev,
        err: "현재 위치를 불러올 수 없습니다.",
        isLoading: false,
      }))
    }
    console.log("position", position)
  }, [position.isLoading]);

  return (
    <Map
      center={position.center}
      style={{ width: "100%", height: "100%"}}
      level={5}
    >
      <Button onClick={() => setPosition(currentPosition)}>
        <img src={getMapImg(4)}/>
      </Button>
      {!position.isLoading && (
        <MapMarker position={position.center} image={{
          src: getMapImg(3),
          size: {
            width: 60,
            height: 60
          }
        }}/>
      )}
      {bikeData.map((position, idx) => (
        <EventMarker position={position}/>
      ))}
      <MapTypeControl position={"TOPRIGHT"} />
      <ZoomControl position={"RIGHT"} />
    </Map>
  )
}

export default Kakao;
