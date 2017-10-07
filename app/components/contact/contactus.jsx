var React = require('react');
import TitleBar from '../common/TitleBar';
var DescPanel = require('DescPanel');
var DetailPanel = require('DetailPanel');
var ContactForm = require('ContactForm');
var {Link, IndexLink} = require('react-router');
var Footer = require('Footer');
var enquiryAPI = require('enquiryAPI');

var ContactUs = React.createClass({
  componentWillMount: function() {
		//add this so fullpage js won't give error saying you called it multiple times
		if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
			console.log('fullpage was there');
			$('#fullpage').fullpage.destroy('all');
		}

	},
  getInitialState : function(){
    return {
      contactChoice: 0,
      isLoading: 'inactive',
      contactFormShow : 'hide',
      title: 'GET IN TOUCH',
      content: 'We thrive by connecting to you. The marketing team of TWC Innovations is all ears for any inquiries you may have.',
    };
  },
  handleClick:function(id){
    this.setState({
      contactChoice: id,
      contactFormShow : 'unhide'
    });
  },
  handleContactForm:function(res){
    this.setState({
      isLoading:true
    });
    this.postEnquiry(res);
  },

  postEnquiry:function(res){
    var that = this;
    enquiryAPI.postEnquiry(res).then(function(){
      console.log('post completed');
      that.setState({
        isLoading:false
      });
    },function(e){
      console.log(e);
    });

  },
  render : function () {
    var {title, content, contactFormShow, contactChoice, isLoading } = this.state;
    return (
      <div>

        <TitleBar title={title} content={content}/>
        <DescPanel onBtnClick={this.handleClick} />
        <DetailPanel />
        <ContactForm id="contact-form"  isLoading={isLoading} optionsState={contactChoice} visibility={contactFormShow} onSubmitComplete={this.handleContactForm}/>
        <Footer/>
      </div>
    );
  }
});

module.exports = ContactUs;
