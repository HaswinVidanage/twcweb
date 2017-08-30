var React = require('react');
var fullpageJs = require('fullpage.js');
import TitleBar from '../common/TitleBar';
var FooterComponent = require('Footer');


var Web = React.createClass ({
  getInitialState: function() {
    return {
      slideIndex: 0
    };
  },
  componentWillMount: function() {

    //add this so fullpage js won't give error saying you called it multiple times
    if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
      console.log('fullpage was there');
      $('#fullpage').fullpage.destroy('all');
    }

  },
  componentDidMount: function(){

    console.log("This", this);
    var that = this;
		$('#fullpage').fullpage({
      onSlideLeave: ( anchorLink, index, slideIndex, direction, nextSlideIndex ) => {

        this.setState({
          slideIndex:1
        });

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

          <div className={ `section section0-home active ` } id="section1">

              <div className="slide active" id="slide1">
                <div>
                  <div className="small-6 medium-6 large-6 columns">
                    <div className = "intro service-intro">
                      <h2 className="service-title">Greenary Website</h2>
                      <p className="service-intro-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        <br/><br/>
                        <button className="button btn-round-red-white btn-service-call"><big className="contact-btn-txt">See it live</big></button>
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
                        <button className="button btn-round-red-white btn-service-call"><big className="contact-btn-txt">See it live</big></button>
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
                        <button className="button btn-round-red-white btn-service-call"><big className="contact-btn-txt">See it live</big></button>
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
