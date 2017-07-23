var React = require('react');
var {FaSpinner, FaCheck} = require('react-icons/lib/fa');
var ContactForm = React.createClass({

  onSubmit:function(e){
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
    this.props.onSubmitComplete(res);
  },
  handleSelect: function(event) {
     this.setState({optionsState: event.target.value});
     this.refs.drpPurpose.value = event.target.value;
   },
  render : function () {
    var {visibility, optionsState, isLoading} = this.props;
    console.log(isLoading);
    function renderStatus() {

      if(isLoading == true){
        console.log('IT HIT TRUE');
        return (
          <div className="spinner-wrap form-loader">
            <img className="" src="./images/Spinner.svg"/>
          </div>
        );
      }
      else if (isLoading == false) {
        console.log('IT HIT FALSE');
        return (
          <div className="spinner-wrap form-loader">
            <FaCheck/>
          </div>
        );
      }
    }

    return (
      <div className={visibility}>
          <div id="contact-form" className="column large-centered medium-6 large-6 contact-form-wrapper" onclick="window.location.hash='back';">
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">

              <select  onChange={this.handleSelect} className="column medium-12 large-12" type="text" ref="drpPurpose" >
                <option value="0"  selected={optionsState == 0}>Request A Demo</option>
                <option value="1" selected={optionsState == 1}>Sales Inquiry</option>
                <option value="2" selected={optionsState == 2}>Customer Support</option>
                <option value="3" selected={optionsState == 3}>Other</option>
              </select>

              <input className="column medium-12 large-12" type="text" ref="name" placeholder="Enter your name" required/>
              <input className="column medium-6 large-6" type="email" ref="email" placeholder="*Email" required/>
              <input className="column medium-6 large-6" type="tel" ref="phone" placeholder="*Phone" required/>
              <textarea className="column medium-12 large-12" type="text" ref="message" placeholder="*Message" required/>

              <button className="expanded button contact-submit-btn">Send {renderStatus()}</button>
            </form>
          </div>
      </div>
    );
  }
});

module.exports = ContactForm;
