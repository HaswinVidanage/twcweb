var React = require('react');
var {FaSpinner, FaCheck} = require('react-icons/lib/fa');

var cvAPI = require('cvAPI');
var careersAPI = require('careersAPI');

// var Careers = require('Careers');

var Cv = React.createClass({

  componentWillMount: function() {
    //add this so fullpage js won't give error saying you called it multiple times
    if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
      console.log('fullpage was there');
      $('#fullpage').fullpage.destroy('all');
    }

  },
  onSubmit:function(e){
    e.preventDefault();

    var selectedVal = this.refs.drpPurpose.value;
    var selectedText = "";
    switch(selectedVal){
      case '0':
        selectedText = "";
        break;

      default:
        selectedText = "";

    }

    console.log("selectedText", selectedText);
    var res = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      job : selectedText,
      file : this.refs.file.value
    };
    this.props.onSubmitComplete(res);
  },
  handleSelect: function(event) {
     this.setState({optionsState: event.target.value});
     this.refs.drpPurpose.value = event.target.value;
   },
   postCv:function(res){
     var that = this;
     cvAPI.postCv(res).then(function(){
       console.log('post completed');
       that.setState({
         isLoading:false
       });
     },function(e){
       console.log(e);
     });

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
      <div id="contact-form" className="column large-centered small-12 medium-6 large-6 contact-form-wrapper">
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">

          <input className="column small-12 medium-12small-12  large-12" type="text" ref="name" placeholder="*Enter your name" required/>
          <input className="column small-12 medium-12small-12  large-12" type="email" ref="email" placeholder="*Email" required/>
          <input className="column small-12 medium-12small-12  large-12" type="tel" ref="phone" placeholder="*Phone" required/>

          <select  onChange={this.handleSelect} className="column medium-12 large-12" type="text" ref="job" required>
              <option value="0">JOB 1</option>
              <option value="1">JOB 2</option>
          </select>

          <input type="file" name="file" ref="file" accept=".pdf" placeholder="file" required />

          <button className="button btn-round-red-white orange-border">Send</button>
        </form>
      </div>
    );
  }
});

module.exports = Cv;
