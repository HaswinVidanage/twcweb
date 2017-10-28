var React = require('react');
var fullpageJs = require('fullpage.js');
import TitleBar from '../common/TitleBar';
var FooterComponent = require('Footer');
import Parser from 'html-react-parser';
var ServicesContent = require("./service-content-en.json");
var ServiceContent,CardStyle;

var ServicesCore = React.createClass({
	componentWillMount: function() {
    ServiceContent = ServicesContent['service_' + this.props.params.serviceIndex];
    CardStyle = {
       backgroundImage: `url(${ServiceContent.card.icon})`
     };

		//add this so fullpage js won't give error saying you called it multiple times
		if ($('html').hasClass('fp-enabled')) {
			console.log('fullpage was there');
			$('#fullpage').fullpage.destroy('all');
		}

	},
  componentWillReceiveProps: function (newProps) {
    ServiceContent = ServicesContent['service_' + newProps.params.serviceIndex];
    CardStyle = {
       backgroundImage: `url(${ServiceContent.card.icon})`
     };

  },
	componentDidMount: function() {

		$('#fullpage').fullpage({
			'menu': false,
			'recordHistory': false,
			'autoScrolling': true,
			'scrollOverflow': false
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
      return ServiceContent.slides.map((item, index) =>{
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
				<div className="section section0-services" data-menuanchor="websites?0" id={`service-section${this.props.params.serviceIndex}`}>
          {renderSlides()}
				</div>
				<div className="section service-info" data-menuanchor="websites?1"  id="service-sub-section2">
					<div className='service-margin-10'>
						<div className='service-info-card small-12 medium-12 large-12 row' style = {CardStyle} >
							<p className="float-right service-card-text">
                {Parser(ServiceContent.card.text)}
							</p>
						</div>
						<div className='service-testomonial-wrapper hide-for-small-only'>
							<img className="service-testomonial-icon" src="http://res.cloudinary.com/haswind/image/upload/v1505545555/services/icons/heart-1.svg"/>
							<p className='service-testomonial'>
								{ServiceContent.testomonial.message}
							</p>
							<span className='service-testomonial-auth-wrapper'>
								<p className='service-testomonial-auth'>
									- {ServiceContent.testomonial.owner}
									<br/>
									{ServiceContent.testomonial.designation}
								</p>
							</span>
						</div>
					</div>
				</div>
				<div className="section discover-service-panel" data-menuanchor="websites?2"  id="service-sub-section3">
					<div className="discover-service-wrap small-12 medium-12 large-12 ">
						<div className="discover-title-row-wrap small-12 medium-12 large-12">
							<div className="row">
								<div className="discover-title-wrap small-12 medium-12 large-12">
									<h5 className="discover-text">{ServicesContent.service_commons.discoverTitle}</h5>
									<p className="discover-text">{ServicesContent.service_commons.dicsoveryDesc}</p>
								</div>
							</div>
						</div>
						<div className="discover-menu-wrap small-12 medium-12 large-12">

								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box" id="discovery-box-01"  id="discovery-box-01" onClick= {()=> {this.goto(ServicesContent.service_commons.tile1.menuLink);}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src={ServicesContent.service_commons.tile1.icon} alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">{ServicesContent.service_commons.tile1.name}</h5>
													<p className="dicsovery-desc hide-for-small-only hide-for-small-only">{ServicesContent.service_commons.tile1.description}</p>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box" id="discovery-box-02" onClick= {()=> {this.goto(ServicesContent.service_commons.tile2.menuLink);}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src={ServicesContent.service_commons.tile2.icon} alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">{ServicesContent.service_commons.tile2.name}</h5>
													<p className="dicsovery-desc hide-for-small-only">{ServicesContent.service_commons.tile2.description}</p>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box" id="discovery-box-03" onClick= {()=> {this.goto(ServicesContent.service_commons.tile3.menuLink);}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src={ServicesContent.service_commons.tile3.icon} alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">{ServicesContent.service_commons.tile3.name}</h5>
													<p className="dicsovery-desc hide-for-small-only">{ServicesContent.service_commons.tile3.description}</p>
												</span>
											</div>
										</div>
									</div>
								</div>


								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box" id="discovery-box-04"onClick= {()=> {this.goto(ServicesContent.service_commons.tile4.menuLink);}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src={ServicesContent.service_commons.tile4.icon} alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">{ServicesContent.service_commons.tile4.name}</h5>
													<p className="dicsovery-desc hide-for-small-only">{ServicesContent.service_commons.tile4.description}</p>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box" id="discovery-box-05"onClick= {()=> {this.goto(ServicesContent.service_commons.tile5.menuLink);}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src={ServicesContent.service_commons.tile5.icon} alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">{ServicesContent.service_commons.tile5.name}</h5>
													<p className="dicsovery-desc hide-for-small-only">{ServicesContent.service_commons.tile5.description}</p>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="small-6 medium-4 large-4 columns discovery-box-wrapper">
									<div className="discovery-box" id="discovery-box-06"onClick= {()=> {this.goto(ServicesContent.service_commons.tile6.menuLink);}}>
										<div className="discovery-text-wrap">
											<div className="small-12 medium-12 large-2 columns">
												<img src={ServicesContent.service_commons.tile6.icon} alt=""/>
											</div>
											<div className="small-12 medium-12 large-10 columns dicsovery-title-wrapper">
												<span>
													<h5 className="discover-text discover-title dicsovery-title">{ServicesContent.service_commons.tile6.name}</h5>
													<p className="dicsovery-desc hide-for-small-only">{ServicesContent.service_commons.tile6.description}</p>
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

module.exports = ServicesCore;
