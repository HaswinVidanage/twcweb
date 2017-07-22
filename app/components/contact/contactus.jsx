var React = require('react');
import TitleBar from '../common/TitleBar';
var DescPanel = require('DescPanel');
var DetailPanel = require('DetailPanel');
var ContactForm = require('ContactForm');
var {Link, IndexLink} = require('react-router');
var Footer = require('Footer');

var ContactUs = React.createClass({
  getInitialState : function(){
    return {
      contactChoice: 0,
      contactFormShow : 'hide',
      title: 'GET IN TOUCH',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    };
  },
  handleClick:function(id){
    this.setState({
      contactChoice: id,
      contactFormShow : 'unhide'
    });
  },
  handleContactForm:function(name){
    alert("clicked "+name);
  },

  render : function () {
    var {title, content, contactFormShow, contactChoice } = this.state;
    return (
      <div>

        <TitleBar title={title} content={content}/>
        <DescPanel onBtnClick={this.handleClick} />
        <DetailPanel />
        <ContactForm id="contact-form"  optionsState={contactChoice} visibility={contactFormShow} onSubmitComplete={this.handleContactForm}/>
        <Footer/>
      </div>
    );
  }
});

module.exports = ContactUs;
