/**
 * StaticMap.jsx
 * Static map component
 */

// Node Modules
import React, {createRef, Component} from 'react';

// Constants
import {COORDINATES} from '../constants/proptypes';

export class StaticMap extends Component {
  constructor() {
    super();
    this.baseMap = createRef();
    this.staticMap;
  }

  componentDidMount() {
    this.staticMap = new google.maps.Map(this.baseMap.current, {
      center: this.props.coordinates,
      clickableIcons: false,
      draggable: false,
      draggableCursor: 'default',
      fullscreenControl: false,
      mapTypeControl: false,
      navigationControl: false,
      scaleControl: false,
      streetViewControl: false,
      zoom: 18,
      zoomControl: false,
    });

    new google.maps.Marker({
      clickable: false,
      map: this.staticMap,
      position: this.props.coordinates,
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

StaticMap.propTypes = {
  coordinates: COORDINATES,
};
