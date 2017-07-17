var React = require('react');
var fullpageJs = require('fullpage.js');
import TitleBar from '../common/TitleBar';
var FooterComponent = require('Footer');


var Web = React.createClass ({
  componentWillMount: function() {

    //add this so fullpage js won't give error saying you called it multiple times
    if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
      console.log('fullpage was there');
      $('#fullpage').fullpage.destroy('all');
    }

  },
  componentDidMount: function(){
		$('#fullpage').fullpage();

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
          <div className="section section0-home active" id="section1">
              <div className="slide " id="slide1">
                  <div className="intro">
                      <h1>Around the world scrolling</h1>
                      <p>Go to the first section and scroll up or to the last one and scroll down to see how it works.</p>
                  </div>
              </div>
              <div className="slide   active" id="slide2">
                <div>
                  <div className="small-6 medium-6 large-6 columns">Sithaka Tea</div>
                  <div className="small-6 medium-6 large-6 columns"> <img src="http://res.cloudinary.com/haswind/image/upload/v1500191502/Untitled_ltuspt.png" /></div>
                </div>
              </div>
              <div className="slide" id="slide3">
                  <h1>Slide 3</h1>
              </div>
          </div>
          <div className="section service-info" id="section2">
              <div className="intro">
                  <h1>Scroll Down</h1>
                  <p>And it will animate down to the first section</p>
              </div>
          </div>
          <div className="section discover-service-panel" id="section3">
              <div className="discover-service-wrap small-12 medium-12 large-12 ">
                  <div className="discover-title-wrap small-12 medium-12 large-12">
                    <div className ="row hide-for-small-only">
                      <div className="discover-title-wrap small-12 medium-12 large-12">
                        <h5 className = "discover-text" >Discover more services by TWC</h5>
                        <p className = "discover-text" >We offer a range of services to fit your needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="discover-menu-wrap small-12 medium-12 large-12">
                    <div className ="row dicovery-row hide-for-small-only">
                      <div className="small-6 medium-4 large-4 columns">
                        <div className="discovery-box">
                          <div className="discovery-text-wrap">
                            <div className="small-2 medium-2 large-2 columns">
                              <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />
                            </div>
                            <div className="small-10 medium-10 large-10 columns">
                              <span>
                                <h5 className = "discover-text discover-title dicsovery-title">Web Design & Development</h5>
                                <p className="dicsovery-desc">Join us to deliver an unique web presence to your clients</p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="small-6 medium-4 large-4 columns">
                        <div className="discovery-box">
                          <div className="discovery-text-wrap">
                            <div className="small-2 medium-2 large-2 columns">
                              <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />
                            </div>
                            <div className="small-10 medium-10 large-10 columns">
                              <span>
                                <h5 className = "discover-text discover-title dicsovery-title">Web Design & Development</h5>
                                <p className="dicsovery-desc">Join us to deliver an unique web presence to your clients</p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="small-6 medium-4 large-4 columns">
                        <div className="discovery-box">
                          <div className="discovery-text-wrap">
                            <div className="small-2 medium-2 large-2 columns">
                              <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />
                            </div>
                            <div className="small-10 medium-10 large-10 columns">
                              <span>
                                <h5 className = "discover-text discover-title dicsovery-title">Web Design & Development</h5>
                                <p className="dicsovery-desc">Join us to deliver an unique web presence to your clients</p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className ="row dicovery-row hide-for-small-only">
                      <div className="small-6 medium-4 large-4 columns">
                        <div className="discovery-box">
                          <div className="discovery-text-wrap">
                            <div className="small-2 medium-2 large-2 columns">
                              <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />
                            </div>
                            <div className="small-10 medium-10 large-10 columns">
                              <span>
                                <h5 className = "discover-text discover-title dicsovery-title">Web Design & Development</h5>
                                <p className="dicsovery-desc">Join us to deliver an unique web presence to your clients</p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="small-6 medium-4 large-4 columns">
                        <div className="discovery-box">
                          <div className="discovery-text-wrap">
                            <div className="small-2 medium-2 large-2 columns">
                              <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />
                            </div>
                            <div className="small-10 medium-10 large-10 columns">
                              <span>
                                <h5 className = "discover-text discover-title dicsovery-title">Web Design & Development</h5>
                                <p className="dicsovery-desc">Join us to deliver an unique web presence to your clients</p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="small-6 medium-4 large-4 columns">
                        <div className="discovery-box">
                          <div className="discovery-text-wrap">
                            <div className="small-2 medium-2 large-2 columns">
                              <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />
                            </div>
                            <div className="small-10 medium-10 large-10 columns">
                              <span>
                                <h5 className = "discover-text discover-title dicsovery-title">Web Design & Development</h5>
                                <p className="dicsovery-desc">Join us to deliver an unique web presence to your clients</p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>
          </div>
      </div>
    );
  }
});

module.exports = Web;
