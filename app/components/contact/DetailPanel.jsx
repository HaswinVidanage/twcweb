var React = require('react');
import MapBox from '../common/AboutMap';

var DetailPanel = React.createClass({
  render :function () {
    return (
      <div>
        <div className="about-detail-panel">
          <div className="small-8 medium-8 large-8 columns address-panel"></div>
          <div className="small-4 medium-4 large-4 columns map-panel">
            <MapBox className="Detail-Map"/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DetailPanel;
