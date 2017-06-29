var React = require('react');
var Isvg = require('react-inlinesvg');
// <img className="project-desktop-thumb" src={thumbnailDesktop.url} alt={title} />
// <img className="project-tablet-thumb" src={thumbnailTablet.url} alt={title} />
// <img className="project-mobile-thumb" src={thumbnailMobile.url} alt={title} />

var SingleProject = React.createClass({
  getInitialState: function () {
    return { deviceVisible: 'lap' };
  },

  handleLapClick : function(){
     this.setState({deviceVisible: 'lap'});
  },
  handleTabClick : function(){
    this.setState({deviceVisible: 'tab'});
  },
  handleMobClick : function(){
    this.setState({deviceVisible: 'mob'});
  },
  render : function(){
    var {_id, title, description, url, thumbnailDesktop, thumbnailTablet, thumbnailMobile} = this.props;
    var {deviceVisible} = this.state;
    return (
      <div className="single-project-wrap">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{url}</p>
          <a href={url}> Click Here </a>
          <div>

              {(function() {
                switch(deviceVisible) {
                    case 'lap':

                        return (
                          // <object id={_id} data="./images/portfolio/laptop.svg" type="image/svg+xml" ref="laptop-svg" >
    	                    //  <img className="project-desktop-thumb" src='./images/portfolio/laptop.png' alt={title} />
    	                    // </object>
                          <Isvg src="./images/portfolio/laptop.svg">
                            <img src="./images/portfolio/laptop.png" />
                          </Isvg>

                        );
                    case 'tab':
                          return <img className="project-tablet-thumb" src='./images/portfolio/tab.svg' alt={title} />;
                    case 'mob':
                          return <img className="project-mobile-thumb" src='./images/portfolio/phone.svg' alt={title} />
                    default:
                        return null;
                }
            })()}

          </div>
          <div className="row">
            <button className="button btn-round-red" ref="btn-lap" onClick={this.handleLapClick}> laptop </button>
            <button className="button btn-round-red" ref="btn-tab" onClick={this.handleTabClick}> Tab </button>
            <button className="button btn-round-red" ref="btn-mob" onClick={this.handleMobClick}> Mobile </button>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = SingleProject;
