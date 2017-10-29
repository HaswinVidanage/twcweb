var React = require('react');
var fullpageJs = require('fullpage.js');
import ReactGA from 'react-ga';
var Footer = require('Footer');
var ContactUsBar = require('ContactUsBar');
var MiniContactForm = require('MiniContactForm');

var Home = React.createClass({
	componentWillMount: function() {
		//add this so fullpage js won't give error saying you called it multiple times
		if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
			console.log('fullpage was there');
			$('#fullpage').fullpage.destroy('all');
		}

	},
	componentDidMount: function(){
		ReactGA.event({
            category: 'Navigation',
            action: 'Clicked Home',
        });
		// TODO : change jquery version to js version
		$('#fullpage').fullpage({
							'scrollBar': false,
							'verticalCentered': false,
							'menu': false,
							'anchors': ['?0', '?1', '?2','?3','?4','?5'],
							'autoScrolling': false,
							'scrollOverflow': false,
							'fitToSection':false,
							'recordHistory': false,
							'css3':true,
							'easingcss3': 'ease-out',
							'recordHistory': false,

							'afterLoad': function(anchorLink, index){
								// console.log("Width/2 : " + $( window ).width()/2);
								// console.log("Height/2 : " + $( window ).height()/2);
								//$('#obj-nexus').width( ($( window ).height()) - 2);
								// if(index == 1){
								// 	// $('#iphone3, #iphone2, #iphone4').addClass('active');
								// 	console.log('Index 1');
								// }


							},
							'onLeave': function(index, nextIndex, direction){
								// make navbar hidden if autoScrolling
								// if(index == 1 && direction == 'down'){
								// 	// make navbar dark
								// 	$('#navbar').addClass('invisible');
								// } else if(index == 2 && direction == 'up'){
								// 	$('#navbar').removeClass('invisible');
								// }

								$('#nexus').toggleClass('moveDown', (index == 1 && direction == 'down' ) || (index != 1) );
								$('#nexus').toggleClass('moveUp', nextIndex == 1);
								//$('#nexus').toggleClass('moveUp', index == 1 && direction == 'up');

								// if((index == 1 && direction == 'down' ) || (index != 1) && direction == 'moveDown' ){
								// 	console.log('GOIN DOWN');
								// 	var element = $("#Punch_In");
								// 	$('#Punch_In').attr('xlink:href',"http://res.cloudinary.com/haswind/image/upload/v1506152829/sales-suite/nexus/screen-1.png");
								// }
								//
								// if(nextIndex == 1 && direction == 'up') {
								// 	console.log('MOVIN UP BOIS');
								// }

							}

					});


	},
	render: function() {
		return (

			<div id="fullpage" className="small-12 medium-12 large-12">
				<div className="section section0-home small-12 medium-12 large-12" id="section0-home">
					<div className="header header-home">
	          <div className="header-container">
	            <div className="row align-middle align-justify">
	              <div className="presentation small-12 medium-6 large-6 align-center">
	                <div className="column">
	                  <div className="hashtags small-12 medium-12 large-11 align-left home-section-1-text">
	                    <h1>
	                      <strong>#Creativity-Ahead</strong>
	                    </h1>
	                  </div>
	                  <div className="title small-12 medium-12 large-11 align-left home-section-1-text">
											<h2>Innovative solution provider for your needs</h2>
	                  </div>

	                  <div className="logos small-12">
	                    <img className="home-logo-bar" src="https://res.cloudinary.com/haswind/image/upload/v1507148273/home/logo_header.png" alt="" />
	                  </div>
	                </div>
	              </div>

	              <div className="hide-for-small-only medium-6 large-6 align-right text-center">
	                <div className="illu illu-editor" id="nexus">
	                  <object id="obj-nexus" data="./images/Home/nexus.svg" type="image/svg+xml">
	                    <img src="./images/Home/nexus.png" />
	                  </object>
	                </div>
	                <div className="illu illu-code text-right hide-for-small-only medium-6 large-6">
										<object id="obj-browser" data="./images/Home/browser-window.svg" type="image/svg+xml">
	                    <img src="./images/Home/browser-window.png" />
	                  </object>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
				</div>
				<div className="section section1-home small-12 medium-12 large-12  " id="section1-home">

					<div className="row align-justify align-middle industrial-app-wrap">
						<div className = 'small-12 medium-6 large-6 content column'>

							<div className="container-sales-suit">
								<img src="./images/Home/twc-industrial-apps.svg" />

								<div className="align-center">
									<p className="justify-text">
										Redefine your selling and distribution process with an app that integrates the entire team.
										TWC sales suite is the ultimate tool that monitors sales team and track locations of sales representative’s real time.
										TWC Industrial Apps enable your company to eliminate all manual ordering processes and will enhance the operational efficiency while increasing company revenue.

									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section section3-home small-12 medium-12 large-12  " id="section3-home">
					<div className="section3-home">
						<div className="r row align-justify align-middle industrial-app-wrap">
							<div className = 'small-12 medium-6 large-6 content column z-index-high'>
								<img src="http://res.cloudinary.com/haswind/image/upload/v1507569261/home/macbook-help-desk.svg" />
							</div>
							<div className = 'small-12 medium-6 large-6 content column'>

								<div className="container-sales-suit">

									<img src="./images/Home/twc-help-desk.svg" />

									<div className="align-center">
										<p className="justify-text">
											We at TWC value long term customer relationships. Help desk system will stamp that relationship with you and customer.
											 The system is built according to your industry and customers’ needs to connect you and your customers better.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section section4-home hide-for-small-only medium-12 large-12  " id="section4-home">
					<div className="section3-home">
						<div className="r row align-justify align-middle ">
							<div className = 'small-12 medium-6 large-6 content column'>
								<div className="container-section4-content">
									<div>
										<h2 className="section4-title">We also deliver<br/>Web, Mobile, SEO<br/>& Digital Marketing Solutions</h2>
									</div>
									<div className="align-center">
										<p className="justify-text section4-content-1">
											We at TWC Innovations welcome the opportunity to design, develop and maintain a cutting edge web application to meet your requirements.
											TWC Innovations will be providing you with the finest quality while maintaining the stability of your web application on all devices such as desktop PC’s, mobile devices and tablets.
										</p>
									</div>
								</div>
							</div>
							<div className = 'small-12 medium-6 large-6 content column'>
								<img src="./images/Home/twc-web-solutions.svg" />
								<div className="container-section4-content">

									<div className="align-center">
										<p className="justify-text">
											TWC Innovations offers the highest quality development for affordable price rates.
											The reason why we are able to provide you with the best quality and rates in the industry is that we minimize the development cost by only recruiting the needed amount of the best and well trained,
											experienced developers to the team who will be working on your project to meet timeline and the standards expected of TWC products.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section section5-home hide-for-small-only medium-12 large-12  " id="section5-home">
					<div className="half-grey">
						<MiniContactForm/>
						<div className = 'padding-top-50 off-white small-12 medium-12 large-12 content column'>
							<div className="padding-sides-350">
							<p className="logo-text-title">Sri Lanka's best companies use TWC to improve their productivity.</p>
							</div>
							<div className="row">
								<div className="small-12 medium-12 large-12 content column small-block-grid-12">
										<div className="small-2 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143889/clients/tanclean.png"/></div>
										<div className="small-2 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143871/clients/threesinha.png"/></div>
										<div className="small-2 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143876/clients/venora.png"/></div>
										<div className="small-2 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143873/clients/oppo.png"/></div>
										<div className="small-2 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143878/clients/ogilvy.png"/></div>
										<div className="small-2 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507049549/clients/nasa.png"/></div>
								</div>
							</div>
							<div className="row">
								<div className="small-12 medium-12 large-12 content column small-block-grid-12">
										<div className="small-3 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143868/clients/cmblogistics.png"/></div>
										<div className="small-3 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143873/clients/fslga.png"/></div>
										<div className="small-3 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143880/clients/cartec.png"/></div>
										<div className="small-3 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143868/clients/azonic.png"/></div>
								</div>
							</div>
							<p className="logo-text-desc">Trusted by companies islandwide</p>
						</div>
					</div>
				</div>
					<ContactUsBar/>
					<Footer/>
			</div>

		);

	}
});

module.exports = Home;
