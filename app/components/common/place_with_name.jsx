import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle} from './my_great_place_styles.js';
var MapPin = require('react-icons/lib/md/location-on');

export default class PlaceWithName extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="map-popup">
          <div className="map-popup-text-wrap">
            <div className="map-popup-address-wrap">
              <span className="map-popup-address-text">
                <span><MapPin/> TWC Innovations</span>
                <br/>
                <span className="padding-left-10">&nbsp;&nbsp;Corportate Office</span>
                <br/> <br/>
                <span className="map-popup-address padding-left-10">
                  25 Vijitha Road, Nedimala
                  &nbsp;&nbsp;Dehiwala 10280

                </span>

                <br/><br/>
                <span className="dir-btn-wrap">
                  <a className="button  orange-hollow" href="https://goo.gl/UqLpkw" target="_blank">&nbsp;&nbsp;&nbsp;Get Directions >&nbsp;&nbsp;&nbsp;</a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
