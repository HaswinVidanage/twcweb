import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
var styleJson = require("./MapStyle.json");

const AnyReactComponent = ({ text }) => <div className="MapIcon">{text}</div>;
import MyGreatPlace from './my_great_place.jsx';


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

class MapBox extends Component {
  static defaultProps = {
    center: {lat: 6.848437, lng: 79.879381},
    zoom: 13
  };


  render() {

    return (
      <GoogleMapReact options={createMapOptions}
        bootstrapURLKeys={{key:'AIzaSyC3FhlIljYjukBKmAN2X_tXP2jY8JoYsSA'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >

        <MyGreatPlace  lat={6.848437} lng={79.879381} text={''} /* TWC Innovations */ />

      </GoogleMapReact>
    );
  }
}

export default MapBox;
