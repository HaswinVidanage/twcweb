var React = require('react');
import MapBox from '../common/AboutMap';

var DetailPanel = React.createClass({
  render :function () {
    return (
      <div>
        <div className="about-detail-panel">
          <div className="small-12 medium-7 large-7 columns address-panel">
            <div className= "small-12 medium-12 large-12 address-row-1">
              <div className="small-4 medium-4 large-4 columns">
                <address>
                    <span>
                        <h3 className="address-title">Corporate Office</h3>
                        TWC Innovations<br />
                        25 Vijitha Road,<br />
                        Nedimala,<br />
                        10350 Sri Lanka
                    </span>
                </address>
              </div>
              <div className="small-4 medium-4 large-4 columns">
                <address>
                    <span>
                        <h3 className="address-title">Corporate Office</h3>
                        TWC Innovations<br />
                        91 WELLINGTON ROAD,<br />
                        CLAYTON VIC,<br />
                        3168, AUSTRALIA
                    </span>
                </address>
              </div>
              <div className="small-4 medium-4 large-4 columns">
                <address>
                    <span>
                        <h3 className="address-title">General Contact</h3>
                        Hotline: 011-273-1912<br/>
                        Phone: 077-377-8084<br/>
                        Email: sales@twcwebs.com<br/>
                    </span>
                </address>
              </div>
            </div>
            <div className= "small-12 medium-12 large-12 address-row-2">
              <div className="small-4 medium-4 large-4 columns">
                <address>
                    <span>
                        <h3 className="address-title">Sales Inquiries</h3>
                        Nafeel: +(94) 77-893-3898<br />
                        Sachin: +(94) 77-893-3898<br />
                        Email: sales@twcwebs.com
                    </span>
                </address>
              </div>
              <div className="small-4 medium-4 large-4 columns">
                <address>
                    <span>
                        <h3 className="address-title">International Sales</h3>
                        Hotline: 011-273-1912<br/>
                        Phone: +(94) 77-893-3898<br/>
                        Email: info@twcwebs.com<br/>
                    </span>
                </address>
              </div>
              <div className="small-4 medium-4 large-4 columns">
              </div>
            </div>
          </div>
          <div className="small-12 medium-5 large-5 columns map-panel">
            <MapBox className="Detail-Map"/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DetailPanel;
