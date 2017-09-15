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

		$('#fullpage').fullpage({
      onSlideLeave: ( anchorLink, index, slideIndex, direction, nextSlideIndex ) => {


    		var leavingSlide = $(this);
        console.log('This got called!!! index'+slideIndex +" leavingSlide : "+leavingSlide );
    		//leaving the first slide of the 2nd Section to the right
    		if(index == 2 && slideIndex == 0 && direction == 'right'){
    			alert("Leaving the fist slide!!");
    		}

    		//leaving the 3rd slide of the 2nd Section to the left
    		if(index == 2 && slideIndex == 2 && direction == 'left'){
    			alert("Going to slide 2! ");
    		}
    	}

    });

	},
  getInitialState : function() {
    return {
      reload:true,
      title: 'WEB APPLICATION DEVELOPMENT',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };
  },
  render: function() {
    return (
      <div id="fullpage">

          <div className= "section section0-home section0-home-services active" id="section1">
              <div className="slide active" id="slide1">
                <div>
                  <div className="small-6 medium-6 large-6 columns">
                    <div className = "intro service-intro">
                      <h2 className="service-title">Greenary Website</h2>
                      <p className="service-intro-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        <br/><br/>
                        <button className="button btn-round-pink-white btn-service-call"><big className="contact-btn-txt">See it live</big></button>
                      </p>
                    </div>
                  </div>
                  <div className="small-6 medium-6 large-6 columns service-img-wrap">
                    <img className="service-img" src="http://res.cloudinary.com/haswind/image/upload/v1503939465/greenery_jsbmti.png" />
                  </div>
                </div>
              </div>

              <div className="slide " id="slide2">
                <div>
                  <div className="small-6 medium-6 large-6 columns">
                    <div className = "intro service-intro">
                      <h2 className="service-title">Greenary Website</h2>
                      <p className="service-intro-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        <br/><br/>
                        <button className="button btn-round-pink-white btn-service-call"><big className="contact-btn-txt">See it live</big></button>
                      </p>
                    </div>
                  </div>
                  <div className="small-6 medium-6 large-6 columns service-img-wrap">
                    <img className="service-img" src="http://res.cloudinary.com/haswind/image/upload/v1503939454/ecom_a43ses.png" />
                  </div>
                </div>
              </div>

              <div className="slide " id="slide3">
                <div>
                  <div className="small-6 medium-6 large-6 columns">
                    <div className = "intro service-intro">
                      <h2 className="service-title">Greenary Website</h2>
                      <p className="service-intro-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        <br/><br/>
                        <button className="button btn-round-pink-white btn-service-call"><big className="contact-btn-txt">See it live</big></button>
                      </p>
                    </div>
                  </div>
                  <div className="small-6 medium-6 large-6 columns service-img-wrap">
                    <img className="service-img" src="http://res.cloudinary.com/haswind/image/upload/v1503939474/cartec_cqnugb.png" />
                  </div>
                </div>
              </div>
          </div>
          <div className="section service-info" id="section2">
            <div className='service-margin-10'>
              <div className='service-info-card small-12 medium-12 large-12 row'>
                <p className="float-right service-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,<strong>Suis nostrud exercitation</strong>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className='service-testomonial-wrapper'>
                <img  className="service-testomonial-icon" src="https://prismic-io.s3.amazonaws.com/guidline-prismic%2F36540da8-1e1c-4849-81cc-a31679a215c2_industry-icon.svg" />
                <p className='service-testomonial'>
                  TWC did a wonderful job with our website! Love the design, work
                  is on point and the timely deliveries impressed me the most. Recommended!
                </p>
                <span className='service-testomonial-auth-wrapper'>
                  <p className='service-testomonial-auth'>
                    - Lalith Sirisena <br/> CEO & Founder Sithaka Tea
                  </p>
                </span>
              </div>
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
