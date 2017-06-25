var React = require('react');
import MapBox from '../common/Map';

var MiniContactForm = React.createClass({

  render:function(){
    return (
      <div className="MiniContactForm small-12 medium-12 large-12 row" id="MiniContactForm">
          <div className="mini-form-box small-6 medium-6 large-6 columns">
              <div className="mini-contact-wrapper">
                  <input className="mini-contact-input" type="text" ref="txt-name" placeholder="Your Name"/>
                  <input className="mini-contact-input" type="email" ref="txt-email" placeholder="Email Address"/>
                  <select className="mini-contact-input no-top-margin"  placeholder="Reason for Contacting">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                  <textarea className="mini-contact-input" rows="4" cols="50" placeholder="Your lovely feedback goes here..." />
              </div>

          </div>

          <div className="MabBox-Wrapper small-6 medium-6 large-6 columns">
            <MapBox className="left-curved-5px"/>
          </div>
      </div>
    );
  }
});

module.exports = MiniContactForm;
