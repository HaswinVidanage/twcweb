var React = require('react');
import MapBox from '../common/Map';

// var {message_typing} = require('react-icons/lib/ti/message-typing');
var {TiMessageTyping} = require('react-icons/lib/ti/');
var {FaEnvelope} = require('react-icons/lib/fa/');
var MiniContactForm = React.createClass({

  render:function(){
    return (
      <div className="MiniContactForm small-12 medium-12 large-12 row" id="MiniContactForm">
          <div className="mini-form-box small-6 medium-6 large-6 columns">
              <div className="mini-contact-wrapper">
                <form>
                  <input className="mini-contact-input" type="text" ref="txt_name" placeholder="Your Name"/>
                  <input className="mini-contact-input" type="email" ref="txt_email" placeholder="Email Address"/>
                  <select required className="round mini-contact-input no-top-margin " ref="drp_reason" placeholder="Reason for Contacting">
                    <option value="" disabled selected hidden>Reason for Contacting</option>
                    <option value="0">Website Design</option>
                    <option value="1">Sales Suit</option>
                    <option value="2">Other</option>
                  </select>
                  <textarea className="mini-text-area" rows="4" cols="50" ref="txtarea_msg" placeholder="Your lovely feedback goes here..." />
                  <div className="mini-submit-wrapper"
                    onClick={() => {
                      this.refs.txtarea_msg.focus();
                    }}> <button type="submit" className="button btn-submit-green-mini" onClick={() => {
                      alert('contact btn clicked');
                    }}><big><FaEnvelope/>&nbsp;Send</big></button> </div>
                </form>
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
