var React = require('react');
import TitleBar from './common/TitleBar';
import PrimaryLocations from './common/PrimaryLocations';
import FounderMessage from './about/FounderMessage';
var TeamGrid = require('TeamGrid');
var ContactUsBar = require('ContactUsBar');
var Footer = require('Footer');



var About = React.createClass({
  componentWillMount: function() {
		//add this so fullpage js won't give error saying you called it multiple times
		if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
			console.log('fullpage was there');
			$('#fullpage').fullpage.destroy('all');
		}

	},
  getInitialState : function(){
    return {

      title: 'ABOUT US',
      content: 'Our existence purports innovative Internet marketing solutions and provides user friendly and customer experience enhanced interfaces aimed at solving corporate and customer relationship issues.'
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
