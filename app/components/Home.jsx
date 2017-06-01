var React = require('react');
// var fullpageJs = require('fullpage.js');

var Home = React.createClass({
	// componentDidMount: function(){
	//   $('#fullpage').fullpage();
	// },
	render: function() {
		return (
			<div >
        <div className="header header-home" >
          <div className="header-container">
            <div className="row align-middle align-justify">
              <div className="presentation small-10 medium-10 large-6 align-center">
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

              <div className="illustration small-11 medium-11 large-6 align-right text-center">
                <div className="illu illu-editor">

                  <object data="./images/Home/nexus.svg" type="image/svg+xml">
                    <img src="./images/Home/nexus.png" />
                  </object>


                </div>

                <div className="illu illu-code text-right">

                  <p>TWO</p>


                </div>

                <div className="illu illu-front">

                  <p>THREE</p>


                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header2">
          <h1>Section 2 </h1>
        </div>
			</div>
		);

	}
});

module.exports = Home;
