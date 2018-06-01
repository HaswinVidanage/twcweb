var React = require('react');
var fullpageJs = require('fullpage.js');
import ReactGA from 'react-ga';
var Footer = require('Footer');
var ContactUsBar = require('ContactUsBar');
var MiniContactForm = require('MiniContactForm');
var MiniContactFormMobile = require('MiniContactFormMobile');
var ImageLoader = require('ImageLoader');

<<<<<<< HEAD
var ImageSlider = require('ImageSlider');


const IMG_HOME_1 = "http://res.cloudinary.com/haswind/image/upload/v1526388473/home/logo_header_new.png";
=======
const IMG_HOME_1 = "https://res.cloudinary.com/haswind/image/upload/v1507148273/home/logo_header.png";
>>>>>>> parent of 89a9725... home, portfolio, Services pages
const IMG_HOME_2 = "./images/Home/nexus.svg";
const IMG_HOME_4 ="./images/Home/browser-window.svg";
const IMG_HOME_6 ="./images/Home/twc-industrial-apps.svg";
const IMG_HOME_7 ="http://res.cloudinary.com/haswind/image/upload/v1507569261/home/macbook-help-desk.svg";
const IMG_HOME_8 ="./images/Home/twc-help-desk.svg";
const IMG_HOME_9 ="./images/Home/twc-web-solutions.svg";
const IMG_HOME_10 ="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143889/clients/tanclean.png";
const IMG_HOME_11 ="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143871/clients/threesinha.png";
const IMG_HOME_12 ="http://res.cloudinary.com/haswind/image/upload/v1527502745/clients/venora.png";
const IMG_HOME_13 ="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143873/clients/oppo.png";
const IMG_HOME_14 ="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143878/clients/ogilvy.png";
<<<<<<< HEAD
const IMG_HOME_15 ="http://res.cloudinary.com/haswind/image/upload/v1527072098/clients/sms-logo.png";
const IMG_HOME_16 ="http://res.cloudinary.com/haswind/image/upload/v1527076682/clients/packwell-lanka.png";
const IMG_HOME_17 ="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143880/clients/cartec.png";
// const IMG_HOME_18 ="http://res.cloudinary.com/haswind/image/upload/v1526626566/sithaka_pzehgf.png";
// const IMG_HOME_19 ="http://res.cloudinary.com/haswind/image/upload/v1526626565/ceylon_ucjvtt.png";

=======
const IMG_HOME_15 ="http://res.cloudinary.com/haswind/image/upload/q_30/v1507049549/clients/nasa.png";
>>>>>>> parent of 89a9725... home, portfolio, Services pages

const imgArray = [
	IMG_HOME_1,
	IMG_HOME_2,
	IMG_HOME_4,
	IMG_HOME_6,
	IMG_HOME_7,
	IMG_HOME_8,
	IMG_HOME_9,
	IMG_HOME_10,
	IMG_HOME_11,
	IMG_HOME_12,
	IMG_HOME_13,
	IMG_HOME_14,
<<<<<<< HEAD
	IMG_HOME_15,
	IMG_HOME_16,
	IMG_HOME_17



=======
	IMG_HOME_15
>>>>>>> parent of 89a9725... home, portfolio, Services pages
];
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
	                    <img className="home-logo-bar" src={IMG_HOME_1} alt="" />
	                  </div>
	                </div>
	              </div>

	              <div className="hide-for-small-only medium-6 large-6 align-right text-center">
	                <div className="illu illu-editor" id="nexus">
	                  <object id="obj-nexus" data={IMG_HOME_2} type="image/svg+xml">
	                  </object>
	                </div>
	                <div className="illu illu-code text-right hide-for-small-only medium-6 large-6">
										<object id="obj-browser" data={IMG_HOME_4} type="image/svg+xml">
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
								<img src={IMG_HOME_6} />

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
						<div className="row align-justify align-middle industrial-app-wrap">
							<div className = 'small-12 medium-6 large-6 content column z-index-high'>
									<img src={IMG_HOME_7} />
							</div>
							<div className = 'small-12 medium-6 large-6 content column'>

								<div className="container-sales-suit">
										<img src={IMG_HOME_8} />

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
								<img src={IMG_HOME_9} />
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
				<div className="section section5-home small-12 medium-12 large-12 " id="section5-home">
					<div className="half-grey">

						<div className="hide-for-small-only">
							<MiniContactForm/>
						</div>
						<div className="show-for-small-only">
							<MiniContactFormMobile/>
						</div>


					{/* MEDIUM and large only */}
						<div className = 'padding-top-50 off-white small-12 medium-12 large-12 content column hide-for-small-only'>
							<div className="padding-sides">
							<p className="logo-text-title">Sri Lanka's best companies use TWC to improve their productivity.</p>
							</div>
							<div className="row">
								<div className="small-12 medium-12 large-12 content column small-block-grid-12">
										<div className="small-2 content column"><a href="http://ogilvypr.lk/" target="_blank"><img className="mini-img" src={IMG_HOME_14}/></a></div>
										<div className="small-2 content column"><a href="http://packwell.lk/" target="_blank"><img className="mini-img" src={IMG_HOME_16}/></a></div>
										<div className="small-2 content column"><a href="http://cartectrading.com/" target="_blank"><img className="mini-img" src={IMG_HOME_17}/></a></div>
										<div className="small-2 content column"><img className="mini-img" src={IMG_HOME_13}/></div>
										<div className="small-2 content column"><img className="mini-img" src={IMG_HOME_15}/></div>
										<div className="small-2 content column"><a href="http://venoragroup.com/" target="_blank"><img className="mini-img" src={IMG_HOME_12}/></a></div>
								</div>
							</div>
							<div className="row">
								<div className="small-12 medium-12 large-12 content column small-block-grid-12">
										<div className="small-3 content column"><a href="http://www.colombologistics.com/" target="_blank"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143868/clients/cmblogistics.png"/></a></div>
										<div className="small-3 content column"><a href="http://fslga.lk/" target="_blank"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143873/clients/fslga.png"/></a></div>
										<div className="small-3 content column"><a href="http://threesinha.lk/" target="_blank"><img className="mini-img" src={IMG_HOME_11}/></a></div>
										<div className="small-3 content column"><a href="http://www.azonicmidas.lk/ " target="_blank"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/q_30/v1507143868/clients/azonic.png"/></a></div>
								</div>
							</div>
<<<<<<< HEAD
							<div className="row">
								<div className="small-12 medium-12 large-12 content column small-block-grid-12">
										<div className="small-2 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/v1527510726/clients/harcourts.png"/></div>
										<div className="small-2 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/v1527511234/clients/prestige.png"/></div>
										<div className="small-2 content column"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/v1527076682/clients/ceylon-jewelry.png"/></div>
										<div className="small-2 content column"><a href="http://hyundai.lk/" target="_blank"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/v1527076683/clients/hyundai-srilanka.png"/></a></div>
										<div className="small-2 content column"><a href="http://sithakatea.com/" target="_blank"><img className="mini-img" src="http://res.cloudinary.com/haswind/image/upload/v1527076682/clients/sithaka.png"/></a></div>
										<div className="small-2 content column"><a href="http://tanclean.lk/" target="_blank"><img className="mini-img" src={IMG_HOME_10}/></a></div>
								</div>
							</div>
=======
>>>>>>> parent of 89a9725... home, portfolio, Services pages
							<p className="logo-text-desc">Trusted by companies islandwide</p>
						</div>
						{/* MEDIUM and large only-END */}




						{/* ONLY FOR MOBILE */}
						<div className = 'padding-top-50 off-white small-12 medium-12 large-12 content column show-for-small-only'>
							<div className="padding-sides">
								<p className="logo-text-title">Sri Lanka's best companies use TWC to improve their productivity.</p>
							</div>
							<div className="row">
								<div className="small-12 content column small-block-grid-12">
									<ImageSlider/>
								</div>
								<p className="logo-text-desc text-center">Trusted by companies islandwide</p>
							</div>
						</div>
						{/* ONLY FOR MOBILE-END */}



					</div>
				</div>
					<ContactUsBar/>
					<Footer/>
				{/* <ImageLoader  imgArray = {imgArray} loadingOverlay= {true} sectionName="Home Page" onLoadCompleted= {this.handleImageLoaded} handleImageError= {this.handleImageError} /> */}
			</div>

		);

	}
});

module.exports = Home;
