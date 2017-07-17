var React = require('react');
var fullpageJs = require('fullpage.js');
import TitleBar from '../common/TitleBar';
var FooterComponent = require('Footer');


var MobileApps = React.createClass ({
  componentWillMount: function() {

    //add this so fullpage js won't give error saying you called it multiple times
    if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
      console.log('fullpage was there');
      $('#fullpage').fullpage.destroy('all');
    }

  },
  componentDidMount: function(){
		$('#fullpage').fullpage({
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
					});

	},
  getInitialState : function() {
    return {
      reload:true,
      title: 'MOBILE APPLICATION DEVELOPMENT',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };
  },
  render: function() {
    return (
      <div id="fullpage">
          <div className="section " id="section0">
              <h1>fullPage.js</h1>
              <p>Continuous Scrolling Enabled</p>
              <img src="imgs/fullPage.png" alt="fullPage" />
          </div>
          <div className="section active" id="section1">
              <div className="slide" id="slide1">
                  <div className="intro">
                      <h1>Around the world scrolling</h1>
                      <p>Go to the first section and scroll up or to the last one and scroll down to see how it works.</p>
                  </div>
              </div>
              <div className="slide active" id="slide2">
                 <div className="small-6 medium-6 large-6 columns">Sithaka Tea</div>
                  <div className="small-6 medium-6 large-6 columns"> <img src="http://res.cloudinary.com/haswind/image/upload/v1500191502/Untitled_ltuspt.png" /></div>
              </div>
              <div className="slide" id="slide3">
                  <h1>Slide 3</h1>
              </div>

          </div>
          <div className="section" id="section2">
              <div className="intro">
                  <h1>Scroll Down</h1>
                  <p>And it will animate down to the first section</p>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = MobileApps;
