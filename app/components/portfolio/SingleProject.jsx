var React = require('react');



var SingleProject = React.createClass({

  render : function(){
    var {_id, title, description, url, thumbnailDesktop, thumbnailTablet, thumbnailMobile} = this.props;

    return (
      <div className="single-project-wrap">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{url}</p>
          <a href={url}> Click Here </a>
          <div>
          <img className="project-desktop-thumb" src={thumbnailDesktop.url} alt={title} />
          <img className="project-tablet-thumb" src={thumbnailTablet.url} alt={title} />
          <img className="project-mobile-thumb" src={thumbnailMobile.url} alt={title} />
          </div>
        </div>
      </div>
    );
  }
});


module.exports = SingleProject;
