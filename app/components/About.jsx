var React = require('react');
import TitleBar from './common/TitleBar';
import PrimaryLocations from './common/PrimaryLocations';
import FounderMessage from './about/FounderMessage';
var TeamGrid = require('TeamGrid');
var ContactUsBar = require('ContactUsBar');
var Footer = require('Footer');



var About = React.createClass({
  getInitialState : function(){
    return {

      title: 'ABOUT US',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    };
  },
  render:function(){
    var {title, content} = this.state;


    return(
      <div>
        <TitleBar title={title} content={content}/>
        <TeamGrid  />
        <FounderMessage/>
        <PrimaryLocations/>
        <ContactUsBar/>
        <Footer/>
      </div>
    );
  }
});

module.exports = About;
