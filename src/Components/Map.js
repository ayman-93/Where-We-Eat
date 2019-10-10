import React, { Component, useState, useEffect } from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCoOSoxJoLOWBUPucEJY3C3P7Suk5o0cSM&libraries=places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  return (
    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={props.defaultZoom}
      defaultCenter={props.markerPosition}
    >
      {props.isMarkerShown && <Marker position={props.markerPosition} onClick={props.onMarkerClick} />}
      < /GoogleMap>)
  }
  )
  
  
  
  
  
function Map(props) {
  const [map, setMap] = useState({});
    
  function onMapMounted(ref) {
      setMap(ref);
    };
  
    
    if(window.google){
      // let locatioin = new window.google.maps.LatLng(props.markerPosition.lat, props.markerPosition.lng);
      // let bounds = new window.google.maps.LatLngBounds()

      // bounds.extend(locatioin)
      // map.fitBounds(bounds)
    }
  

  
    console.log("props.markerPosition: ", props.markerPosition);
  
    return (
    <MyMapComponent isMarkerShown markerPosition={props.markerPosition} defaultZoom={13} defaultCenter={props.markerPosition} onMapMounted={onMapMounted} />
      )
    }
    
    
export default Map