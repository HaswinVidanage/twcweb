import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
var styleJson = require("./AboutMapStyle.json");

const AnyReactComponent = ({ text }) => <div className="MapIcon">{text}</div>;
import PlaceWithName from './place_with_name.jsx';


function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true,
    panControl: false,
    scrollwheel: false,
    styles: styleJson
  };
}

class AboutMap extends Component {
  static defaultProps = {
    center: {lat: 6.849805, lng: 79.879348},
    zoom: 15
  };

  render() {

    return (
      <GoogleMapReact options={createMapOptions}
        bootstrapURLKeys={{key:'AIzaSyC3FhlIljYjukBKmAN2X_tXP2jY8JoYsSA'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >

        <PlaceWithName  lat={6.849805} lng={79.879348} text={''} />

      </GoogleMapReact>
    );
  }
}

export default AboutMap;
