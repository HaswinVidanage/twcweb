var React = require('react');
var {Link, IndexLink} = require('react-router');

var ContactUsBar = React.createClass({

  render:function(){
    return (
      <div className="ContactUsBar small-12 medium-12 large-12 row" id="ContactUsBar">

          <div className="small-6 medium-6 large-6 padding-top-50 columns">
            <div className="column">
              <div>
                  <h2 className="contactus-bar-text">Contact Us Today!</h2>
              </div>
            </div>
          </div>
          <div className="small-6 medium-6 large-6 padding-top-50 columns">
            <div className="small-6 medium-6 large-6 columns">
              <button className="button btn-round-red-white"><big>Request a call</big></button>
            </div>
            <div className="small-6 medium-6 large-6 columns">
              <button className="button btn-round-red-red"><big>Contact Us</big></button>
            </div>
          </div>

      </div>
    );
  }
});

module.exports = ContactUsBar;
