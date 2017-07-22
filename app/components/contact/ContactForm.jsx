var React = require('react');

var ContactForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    this.props.onSubmitComplete(this.refs.name.value);
  },
  render : function () {
    var {visibility, optionsState} = this.props;
    return (
      <div className={visibility}>
          <div id="contact-form" className="column large-centered medium-6 large-6 contact-form-wrapper" onclick="window.location.hash='back';">
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">

              <select className="column medium-12 large-12" type="text" ref="drpPurpose" value={optionsState}>
                <option value="0">Request A Demo</option>
                <option value="1">Sales Inquiry</option>
                <option value="2">Customer Support</option>
                <option value="3">Other</option>
              </select>

              <input className="column medium-12 large-12" type="text" ref="name" placeholder="Enter your name"/>
              <input className="column medium-6 large-6" type="text" ref="firstName" placeholder="*First Name"/>
              <input className="column medium-6 large-6" type="text" ref="lastName" placeholder="*Last Name"/>
              <input className="column medium-6 large-6" type="email" ref="email" placeholder="*Email"/>
              <input className="column medium-6 large-6" type="tel" ref="tele" placeholder="*Phone"/>
              <textarea className="column medium-12 large-12" type="text" ref="message" placeholder="*Message"/>

              <button className="expanded button contact-submit-btn">Send</button>
            </form>
          </div>
      </div>
    );
  }
});

module.exports = ContactForm;
