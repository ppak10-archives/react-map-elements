/**
 * Map.jsx
 * Page to test out react-map-elements component
 */

// Node Modules
import React, {useState} from 'react';

// Components
import {DynamicMap} from '../../src/components/DynamicMap';
import {PlacesSearch} from '../../src/components/PlacesSearch';

export const MapPage = () => {
  // State
  const [coordinates, setCoordinates] = useState({
    lat: 40,
    lng: 40,
  });

  // Callbacks
  const receivedPlace = (place) => {
    setCoordinates({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };

  return (
    <>
      <PlacesSearch searchCallback={receivedPlace} />
      <p>{`lat: ${coordinates.lat}, lng: ${coordinates.lng}`}</p>
      <DynamicMap coordinates={coordinates} />
    </>
  );
};
