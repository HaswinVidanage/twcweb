var React = require('react');
import MapBox from '../common/Map';
var {TiMessageTyping} = require('react-icons/lib/ti/');
var {FaEnvelope, FaSpinner, FaCheck} = require('react-icons/lib/fa/');
var enquiryAPI = require('enquiryAPI');

var MiniContactForm = React.createClass({

  getInitialState : function() {
    return {
      optionsState : 0,
      submitBtnState: 0

    };
  },
  onSubmit:function(e) {
    e.preventDefault();

    var selectedVal = this.refs.drpPurpose.value;
    var selectedText = "";

    switch(selectedVal){
      case '0':
        selectedText = 'Demo-Request';
        break;
      case '1':
        selectedText = 'Sales-Enquiry';
        break;
      case '2':
        selectedText = 'Customer-Support';
        break;
      case '3':
        selectedText = 'Other';
        break;
      default:
        selectedText = 'error';
    }

    console.log("selectedText", selectedText);
    var res = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      enquiryType : selectedText,
      message : this.refs.message.value
    };
    this.handleContactForm(res);
  },

  handleSelect: function(event) {
     this.setState({optionsState: event.target.value});
     this.refs.drpPurpose.value = event.target.value;
   },

   handleContactForm:function(res){
     this.setState({
       submitBtnState: 1
     });
     this.postEnquiry(res);
   },

   postEnquiry:function(res){
     var that = this;
     enquiryAPI.postEnquiry(res).then(function(){
       that.setState({
         submitBtnState: 2
       });

       setTimeout(function() {
         that.setState({
           submitBtnState: 1
         });
          setTimeout(function() {
            that.setState({
              submitBtnState: 0
            });
          }, 2000);
      }, 3000);

     },function(e){
       that.setState({
         submitBtnState: -1
       });
       console.log(e);
     });

   },
  render:function(){
    var submitBtnState = this.state.submitBtnState;

    function renderSubmitButton() {
      console.log('renderSubmitButton', submitBtnState);
      if(submitBtnState == 0){
        return (
          <big><FaEnvelope/>&nbsp;Send</big>
        );
      }
      else if (submitBtnState == 1) {
        return (
          <big><FaSpinner/>&nbsp;...</big>
        );
      } else if (submitBtnState == 2) {
        return (
          <big><FaCheck/>&nbsp;Sent</big>
        );
      } else {
        return (
          <big><FaEnvelope/>&nbsp;Error</big>
        );
      }
    }

    return (
      <div className="MiniContactForm small-12 medium-12 large-12 row" id="MiniContactForm">
          <div className="mini-form-box small-12 medium-6 large-6 columns">
              <div className="mini-contact-wrapper">
                <form onSubmit={this.onSubmit}>
                  <input className="mini-contact-input" type="text" ref="name" placeholder="Your Name" required
                    value = {this.state.submitBtnState == 2 ? '' : this.value}
                  />
                  <input className="mini-contact-input" type="email" ref="email" placeholder="Email Address" required
                    value = {this.state.submitBtnState == 2 ? '' : this.value}
                  />
                  <input className="mini-contact-input" type="text" ref="phone" placeholder="Contact Number" required
                    value = {this.state.submitBtnState == 2 ? '' : this.value}
                  />

                  <select required onChange={this.handleSelect} className="round mini-contact-input no-top-margin " placeholder="Reason for Contacting" ref="drpPurpose" >
                    <option value="0"  selected={this.state.optionsState == 0}>Request A Demo</option>
                    <option value="1" selected={this.state.optionsState == 1}>Sales Inquiry</option>
                    <option value="2" selected={this.state.optionsState == 2}>Customer Support</option>
                    <option value="3" selected={this.state.optionsState == 3}>Other</option>
                  </select>

                  <textarea required className="mini-text-area" rows="4" cols="50" ref="message" placeholder="Your lovely feedback goes here..."
                    value = {this.state.submitBtnState == 2 ? '' : this.value}
                  />
                  <button type="submit" className="button btn-submit-green-mini hide-for-small-only" >{renderSubmitButton()}</button>
                  <button type="submit" className="button btn-submit-green-mini-mobile show-for-small-only" >{renderSubmitButton()}</button>

                </form>
              </div>

          </div>

          <div className="MabBox-Wrapper small-12 medium-6 large-6 columns">
            <MapBox className="left-curved-5px"/>
          </div>

      </div>
    );
  }
});

module.exports = MiniContactForm;
