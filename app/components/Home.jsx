var React = require('react');
var fullpageJs = require('fullpage.js');

var Footer = require('Footer');
var ContactUsBar = require('ContactUsBar');
var MiniContactForm = require('MiniContactForm');

var Home = React.createClass({
	componentDidMount: function(){
		$('#fullpage').fullpage({
							verticalCentered: true,
							menu: '#menu',
							anchors: ['?intro1', '?intro2', '?intro3','?intro4'],
							autoScrolling: false,
						  scrollOverflow: false,
							fitToSection:false,

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


								$('#nexus').toggleClass('moveDown', (index == 1 && direction == 'down' ) || (index == 2 && direction == 'down' ) );
								$('#nexus').toggleClass('moveUp', nextIndex == 1);
								//$('#nexus').toggleClass('moveUp', index == 1 && direction == 'up');

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
	              <div className="presentation small-10 medium-6 large-6 align-center">
	                <div className="column">
	                  <div className="hashtags small-12 medium-12 large-11">
	                    <h1>
	                      <strong>#Creativity-Ahead</strong>
	                    </h1>
	                  </div>
	                  <div className="title small-12 medium-12 large-11">
	                    <h2>One place for all your Websites & Apps</h2>
	                  </div>

	                  <div className="logos small-12">
	                    <img src="https://prismicio.cdn.prismic.io/prismicio%2Fd590a9ff-fad3-4e71-9453-fca04fa5a66e_logo_header.svg" alt="" />
	                  </div>
	                </div>
	              </div>

	              <div className="illustration small-11 medium-6 large-6 align-right text-center">
	                <div className="illu illu-editor" id="nexus">
	                  <object id="obj-nexus" data="./images/Home/nexus.svg" type="image/svg+xml">
	                    <img src="./images/Home/nexus.png" />
	                  </object>
	                </div>
	                <div className="illu illu-code text-right small-11 medium-6 large-6">
										<object id="obj-browser" data="./images/Home/browser-window.svg" type="image/svg+xml">
	                    <img src="./images/Home/browser-window.png" />
	                  </object>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
				</div>
				<div className="section section1-home small-12 medium-12 large-12 " id="section1-home">

					<div className="r row align-justify align-middle ">
						<div className = 'small-12 medium-6 large-6 content column'>

							<div className="container-sales-suit">
								<object id="obj-sales-suit" data="./images/Home/grabber-logo.svg" type="image/svg+xml">
									<img src="./images/Home/grabber-logo.png" />
								</object>

								<div className="align-center">
									<p className="justify-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section section3-home small-12 medium-12 large-12" id="section3-home">
					<div className="section3-home">
						<div className="r row align-justify align-middle ">
							<div className = 'small-12 medium-6 large-6 content column'>
								<img src="./images/Home/dummy.png" />
							</div>
							<div className = 'small-12 medium-6 large-6 content column'>

								<div className="container-sales-suit">
									<object id="obj-sales-suit" data="./images/Home/grabber-logo.svg" type="image/svg+xml">
										<img src="./images/Home/grabber-logo.png" />
									</object>

									<div className="align-center">
										<p className="justify-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
						</div>


					</div>
				</div>
				<div className="section section4-home small-12 medium-12 large-12" id="section4-home">
					<div className="section3-home">
						<div className="r row align-justify align-middle ">
							<div className = 'small-12 medium-6 large-6 content column'>
								<div className="container-sales-suit">
									<object id="obj-sales-suit" data="./images/Home/grabber-logo.svg" type="image/svg+xml">
										<img src="./images/Home/grabber-logo.png" />
									</object>

									<div className="align-center">
										<p className="justify-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
							<div className = 'small-12 medium-6 large-6 content column'>

								<div className="container-sales-suit">
									<object id="obj-sales-suit" data="./images/Home/grabber-logo.svg" type="image/svg+xml">
										<img src="./images/Home/grabber-logo.png" />
									</object>

									<div className="align-center">
										<p className="justify-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<MiniContactForm/>
				</div>

				<ContactUsBar/>
				<Footer/>
			</div>

		);

	}
});

module.exports = Home;
