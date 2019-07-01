/**
 * Base.jsx
 * Base map component that provides reference
 */

// Node Modules
import React, {createRef, Component} from 'react';

export class BaseMap extends Component {
  constructor() {
    super();
    this.baseMap = createRef();
  }

  componentDidMount() {
    new google.maps.Map(this.baseMap.current, {
      center: {lat: 40.4437, lng: -79.9444},
      fullscreenControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      zoom: 16,
      zoomControl: false,
    });
  }

  render() {
    return (
      <div className="map-container">
        <div ref={this.baseMap} className="map" />
      </div>
    );
  }
}
