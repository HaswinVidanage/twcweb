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
                        95, Southampton st,<br />
                        Sydenham,<br />
                        Christchurch
                    </span>
                </address>
              </div>
              <div className="small-4 medium-4 large-4 columns">
                <address>
                    <span>
                        <h3 className="address-title">Corporate Office</h3>
                        TWC Innovations<br />
                        8 Warrina court<br/>
                        Burwood east<br/>
                        Victoria 3151<br/>
                    </span>
                </address>
              </div>
            </div>
            <div className= "small-12 medium-12 large-12 address-row-2">
              <div className="small-4 medium-4 large-4 columns">
                <address>
                    <span>
                        <h3 className="address-title">Sales Inquiries</h3>
                          <a href="tel:+94112731912">Hotline : +(94) 011-273-1912</a><br/>
                          <a href="tel:+94773778084">Nafeel  : +(94) 077-377-8084</a><br/>
                          <a href="email:sales@twcwebs.com">Email: sales@twcwebs.com</a>
                    </span>
                </address>
              </div>
              <div className="small-4 medium-4 large-4 columns">
                <address>
                    <span>
                        <h3 className="address-title">International Sales</h3>
                        <a href="tel:+64224177221">New Zealand: (+64) 224177221</a><br/>
                        <a href="tel:+61450964261">Australia: (+61) 0450964261</a><br/>
                        <a href="mail:sales@twcwebs.com">Email: sales@twcwebs.com</a>
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
