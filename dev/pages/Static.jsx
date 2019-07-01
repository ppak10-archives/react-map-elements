/**
 * Static.jsx
 * Page to display static map element
 */

// Node Modules
import React from 'react';

// Components
import {StaticMap} from '../../src/components/StaticMap';

export const StaticPage = () => {
  const coordinates = {
    lat: 40.4437,
    lng: -79.9444,
  };

  return <StaticMap coordinates={coordinates} />;
};
