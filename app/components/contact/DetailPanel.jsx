var React = require('react');
import MapBox from '../common/AboutMap';

var DetailPanel = React.createClass({
  render :function () {
    return (
      <div>
        <div className="about-detail-panel">
          <div className="small-7 medium-7 large-7 columns address-panel"></div>
          <div className="small-5 medium-5 large-5 columns map-panel">
            <MapBox className="Detail-Map"/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DetailPanel;
