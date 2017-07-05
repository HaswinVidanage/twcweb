var React = require('react');
import TitleBar from './common/TitleBar';
import FounderMessage from './about/FounderMessage';

//use of stateless functional components

var About = React.createClass({

  handlePolyClick : function(id) {
    console.log(id);
  //  this.setState({clicked: true});
  },
  handleMouseLeave : function() {
    console.log('reset grid');
    // this.setState({clicked: false});
  },
  getInitialState : function(){
    return {
      clicked: false,
      title: 'ABOUT US',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    };
  },
  render:function(){
    var {title, content, clicked} = this.state;

    var renderMsg = function() {
      if(clicked){
        return (<h1>HOORAY!</h1>);
      }

    };
    return(
      <div>
        <TitleBar title={title} content={content}/>
        <div classsName = "small-12 medium-12 large-12">
          <div className="floating-about-text">
          {renderMsg()}
          <h2 className="about-title">ONE <span className= "red-span">CARING</span> TEAM</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>

          <div>
          <svg version="1.1" id="Team" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1440 905" style={{enableBackground: 'new 0 0 1440 905'}} xmlSpace="preserve">
              <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.about-st0{fill:none;enable-background:new    ;}\n\t.about-st1{fill:#F6F6F6;}\n\t.about-st2{fill:#FFFFFF;}\n\t.about-st2:hover {\n\t\tfill: #ff0404!important;\n\t}\n" }} />
              <path className="about-st0" d="z" />
              <g id="teams">
                <rect className="about-st1" width={1440} height={901} />
                <g id="_1">
                  <path id="polygon-8" className="about-st2" d="M813.4,675.6l133.9-133.9l133.9,133.9L947.3,809.5L813.4,675.6z" />
                  <path id="polygon-3" className="about-st2" d="M531.8,389.2l133.9-133.9l133.9,133.9L665.7,523.1L531.8,389.2z" />
                  <path id="polygon-1"  onClick={() => this.handlePolyClick(1)} onMouseEnter={() => this.handlePolyClick(1)}  onMouseLeave={this.handleMouseLeave}className="about-st2" d="M672.7,248.4l133.9-133.9l133.9,133.9L806.6,382.3L672.7,248.4z" />

                </g>
                <g id="_2">
                  <path id="polygon-6" className="about-st2" d="M672.5,530.1l133.9-133.9l133.9,133.9L806.4,664L672.5,530.1z" />
                  <path id="polygon-4" className="about-st2" d="M813.4,389.2l133.9-133.9l133.9,133.9L947.3,523.1L813.4,389.2z" />
                  <path id="polygon-2" className="about-st2" d="M954.2,248.4l133.9-133.9L1222,248.4l-133.9,133.9L954.2,248.4z" />
                </g>
                <g id="_3">
                  <path id="polygon-5" className="about-st2" d="M1096.7,391.1l133.9-133.9l133.9,133.9l-133.9,133.9L1096.7,391.1z" />
                  <path id="polygon-7" className="about-st2" d="M954.5,534.3l133.9-133.9l133.9,133.9l-133.9,133.9L954.5,534.3z" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <FounderMessage/>
      </div>
    );
  }
});

module.exports = About;
