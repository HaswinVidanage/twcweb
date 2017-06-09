var React = require('react');
var fullpageJs = require('fullpage.js');

var Home = React.createClass({
	componentDidMount: function(){
		$('#fullpage').fullpage({
							verticalCentered: true,
							menu: '#menu',
							anchors: ['?firstPage', '?secondPage', '?3rdPage'],
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
				<div className="section small-12 medium-12 large-12 developer-productivity" id="section1-home">
					<div className="developer-productivity-container row align-justify align-middle">
						<div className = 'small-12 medium-6 large-5 content column'>
							<h1>Enjoy it</h1>
						</div>
					</div>
				</div>
				<div className="section small-12 medium-12 large-12" id="section3-home">
					<div className="section3-home">
						<h1>Enjoy it</h1>
					</div>
				</div>
			</div>

		);

	}
});

module.exports = Home;
