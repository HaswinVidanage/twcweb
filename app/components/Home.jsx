var React = require('react');
//var fullpageJs = require('fullpage.js');

var Home = React.createClass({
	componentDidMount: function(){
		$('#fullpage').fullpage({
							verticalCentered: true,
							menu: '#menu',
							anchors: ['?firstPage', '?secondPage', '?3rdPage'],
							autoScrolling: false,

							'afterLoad': function(anchorLink, index){
								if(index == 2){
									// $('#iphone3, #iphone2, #iphone4').addClass('active');
									console.log('Index 2');
								}
							},

							'onLeave': function(index, nextIndex, direction){
								if (index == 2 && direction == 'down'){
									console.log('index 2 down');
									//$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
								}
								else if(index == 2 && direction == 'up'){
									console.log('index 2 up');
									//$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
								}

								$('#nexus').toggleClass('moveDown', (index == 1 && direction == 'down' ) || (index == 4 && direction == 'up'));
								$('#nexus').toggleClass('moveUp', nextIndex == 1);
								//$('#nexus').toggleClass('moveUp', index == 1 && direction == 'up');

							}

					});
	},
	render: function() {
		return (
			// <div id="fullpage">
      //   <div className="header header-home section" id="section0">
      //     <div className="header-container">
      //       <div className="row align-middle align-justify">
      //         <div className="presentation small-10 medium-6 large-6 align-center">
      //           <div className="column">
      //             <div className="hashtags small-12 medium-12 large-11">
      //               <h1>
			//
      //                 <strong>#Creativity-Ahead</strong>
      //               </h1>
      //             </div>
      //             <div className="title small-12 medium-12 large-11">
      //               <h2>One place for all your Websites & Apps</h2>
      //             </div>
			//
			//
      //             <div className="logos small-12">
			//
      //               <img src="https://prismicio.cdn.prismic.io/prismicio%2Fd590a9ff-fad3-4e71-9453-fca04fa5a66e_logo_header.svg" alt="" />
			//
      //             </div>
      //           </div>
      //         </div>
			//
      //         <div className="illustration small-11 medium-6 large-6 align-right text-center">
      //           <div className="illu illu-editor">
			//
      //             <object data="./images/Home/nexus.svg" type="image/svg+xml">
      //               <img src="./images/Home/nexus.png" />
      //             </object>
			//
			//
      //           </div>
			//
      //           <div className="illu illu-code text-right">
			//
			// 						<object data="./images/Home/browser-window.svg" type="image/svg+xml">
      //               <img src="./images/Home/browser-window.png" />
      //             </object>
      //           </div>
			//
      //         </div>
      //       </div>
      //     </div>
      //   </div>
			// 	<div class="section" id="section2">
			// 		<div class=" ">
			// 			<h1>Enjoy it</h1>
			// 		</div>
			// 	</div>
			// 	<div class="section" id="section2">
			// 		<div class=" ">
			// 			<h1>Enjoy it</h1>
			// 		</div>
			// 	</div>
			// </div>

			<div id="fullpage">
				<div className="section section0-home" id="section0-home">
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

	                  <object data="./images/Home/nexus.svg" type="image/svg+xml">
	                    <img src="./images/Home/nexus.png" />
	                  </object>


	                </div>

	                <div className="illu illu-code text-right">
										<object  data="./images/Home/browser-window.svg" type="image/svg+xml">
	                    <img src="./images/Home/browser-window.png" />
	                  </object>
	                </div>

	              </div>
	            </div>
	          </div>
	        </div>
				</div>
				<div className="section" id="section1-home">
					<div className="section2-home">
						<h1>Enjoy it</h1>
					</div>
				</div>
				<div className="section" id="section3-home">
					<div className="section3-home">
						<h1>Enjoy it</h1>
					</div>
				</div>
			</div>

		);

	}
});

module.exports = Home;
