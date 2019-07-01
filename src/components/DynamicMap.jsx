/**
 * DynamicMap.jsx
 * Dynamic map component
 */

// Node Modules
import React, {createRef, Component} from 'react';

// Constants
import {COORDINATES} from '../constants/proptypes';

export class DynamicMap extends Component {
  constructor() {
    super();
    this.baseMap = createRef();
    this.dynamicMap;
    this.marker;
  }

  componentDidMount() {
    this.dynamicMap = new google.maps.Map(this.baseMap.current, {
      center: this.props.coordinates,
      clickableIcons: false,
      fullscreenControl: false,
      mapTypeControl: true,
      streetViewControl: true,
      zoom: 18,
      zoomControl: false,
    });

    this.marker = new google.maps.Marker({
      clickable: false,
      map: this.dynamicMap,
      position: this.props.coordinates,
    });
  }

  componentDidUpdate() {
    this.dynamicMap.setOptions({
      center: this.props.coordinates,
    });
    this.marker.setMap(null);
    this.marker = new google.maps.Marker({
      clickable: false,
      position: this.props.coordinates,
      map: this.dynamicMap,
    });
  }

  render() {
    return (
      <div className="static-map-container">
        <div ref={this.baseMap} className="map" />
      </div>
    );
  }
}

DynamicMap.propTypes = {
  coordinates: COORDINATES,
};
