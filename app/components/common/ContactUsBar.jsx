var React = require('react');
var {Link, IndexLink} = require('react-router');

var ContactUsBar = React.createClass({

  render:function(){
    return (
      <div className="ContactUsBar small-12 medium-12 large-12 row" id="ContactUsBar">
        <div className="contact-us-inner-wrap">
          <div className="small-4 medium-6 large-6  contact-us-text columns">
            <div className="contact-text-pad">
              <div>
                  <h2 className="contactus-bar-text">Contact Us Today!</h2>
              </div>
            </div>
          </div>
          <div className="small-8 medium-6 large-6  columns contact-us-btns">
            <div className="small-12 medium-6 large-6 columns">
              <button className="button btn-round-red-white"><big className="contact-btn-txt">
                <a href="tel:+13174562564">Call Us</a>
              </big></button>
            </div>
            <div className="small-12 medium-6 large-6 columns">
              <button className="button btn-round-red-red"><big className="contact-btn-txt">
                <Link to="/contact" className="font-white">Contact Us</Link>
              </big></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContactUsBar;
