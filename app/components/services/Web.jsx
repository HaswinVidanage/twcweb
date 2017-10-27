var React = require('react');
var fullpageJs = require('fullpage.js');
import TitleBar from '../common/TitleBar';
var FooterComponent = require('Footer');
import Parser from 'html-react-parser';
var {service_commons, service_1} = require("./service-content-en.json");
console.log(service_commons);
var serviceData = service_1;
var Web = React.createClass({
	componentWillMount: function() {

		//add this so fullpage js won't give error saying you called it multiple times
		if ($('html').hasClass('fp-enabled')) {
			console.log('fullpage was there');
			$('#fullpage').fullpage.destroy('all');
		}

	},
	componentDidMount: function() {

		$('#fullpage').fullpage({
			onSlideLeave: (anchorLink, index, slideIndex, direction, nextSlideIndex) => {
				var leavingSlide = $(this);
				console.log('This got called!!! index' + slideIndex + " leavingSlide : " + leavingSlide);
				//leaving the first slide of the 2nd Section to the right
				if (index == 2 && slideIndex == 0 && direction == 'right') {
					alert("Leaving the fist slide!!");
				}

				//leaving the 3rd slide of the 2nd Section to the left
				if (index == 2 && slideIndex == 2 && direction == 'left') {
					alert("Going to slide 2! ");
				}
			}

		});

	},
	getInitialState: function() {
		return {reload: true, title: 'WEB APPLICATION DEVELOPMENT', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'};
	},
	goto: function(url) {
		window.open(url, '_blank' // <- This is what makes it open in a new window.
		);
	},

	render: function() {
    var renderSlides = () => {
      return serviceData.slides.map((item, index) =>{
        console.log('index', index);
        console.log('item',item);
        return (
          <div className="slide" id={index} key={index}>
            <div>
              <div className="small-12 medium-6 large-6 columns">
                <div className="intro service-intro">
                  <h2 className="service-title">{item.title}</h2>
                  <p className="service-intro-info">{item.info}
                    <br/><br/>
                    <button className="button btn-round-pink-white btn-service-call" onClick={() => {
                      this.goto(item.link)
                    }}>
                      <big className="contact-btn-txt">See it live</big>
                    </button>
                  </p>
                </div>
              </div>
              <div className="small-12 medium-6 large-6 columns service-img-wrap">
                <img className="service-img" src={item.img}/>
              </div>
            </div>
          </div>
        );
      });
    };

		return (
			<div id="fullpage">
				<div className="section section0-home section0-home-services " id="service-section1">
          {renderSlides()}
				</div>
				<div className="section service-info" id="service-section2">
					<div className='service-margin-10'>
						<div className='service-info-card small-12 medium-12 large-12 row'>
							<p className="float-right service-card-text">
                {Parser(serviceData.card_text)}
							</p>
						</div>
						<div className='service-testomonial-wrapper hide-for-small-only'>
							<img className="service-testomonial-icon" src="http://res.cloudinary.com/haswind/image/upload/v1505545555/services/icons/heart-1.svg"/>
							<p className='service-testomonial'>
								{serviceData.testomonial.message}
							</p>
							<span className='service-testomonial-auth-wrapper'>
								<p className='service-testomonial-auth'>
									- {serviceData.testomonial.owner}
									<br/>
									{serviceData.testomonial.designation}
								</p>
							</span>
						</div>
					</div>
				</div>
				<div className="section discover-service-panel" id="service-section3">
					<div className="discover-service-wrap small-12 medium-12 large-12 ">
						<div className="discover-title-row-wrap small-12 medium-12 large-12">
							<div className="row">
								<div className="discover-title-wrap small-12 medium-12 large-12">
									<h5 className="discover-text">{service_commons.discoverTitle}</h5>
									<p className="discover-text">{service_commons.dicsoveryDesc}</p>
								</div>
							</div>
						</div>
						<div className="discover-menu-wrap small-12 medium-12 large-12">

								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box" onClick= {()=> {this.goto('google.com');}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">Web Design & Development</h5>
													<p className="dicsovery-desc hide-for-small-only hide-for-small-only">Join us to deliver an unique web presence to your clients</p>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box" onClick= {()=> {this.goto('google.com');}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">Web Design & Development</h5>
													<p className="dicsovery-desc hide-for-small-only">Join us to deliver an unique web presence to your clients</p>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box" onClick= {()=> {this.goto('google.com');}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">Web Design & Development</h5>
													<p className="dicsovery-desc hide-for-small-only">Join us to deliver an unique web presence to your clients</p>
												</span>
											</div>
										</div>
									</div>
								</div>
							

								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box"onClick= {()=> {this.goto('google.com');}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">Web Design & Development</h5>
													<p className="dicsovery-desc hide-for-small-only">Join us to deliver an unique web presence to your clients</p>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box"onClick= {()=> {this.goto('google.com');}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">Web Design & Development</h5>
													<p className="dicsovery-desc hide-for-small-only">Join us to deliver an unique web presence to your clients</p>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box"onClick= {()=> {this.goto('google.com');}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">Web Design & Development</h5>
													<p className="dicsovery-desc hide-for-small-only">Join us to deliver an unique web presence to your clients</p>
												</span>
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
