var React = require('react');
var Footer = require('Footer');
var projectsApi = require('projectsApi');

var SingleProject = require('SingleProject');
var fullpageJs = require('fullpage.js');

var Portfolio = React.createClass({
  getInitialState : function(){
    return {
      isLoading: true,
      projects: [],
      errorMessage: undefined
    };
  },
  componentWillMount:function(){
    this.fetchProjects();
  },
  fetchProjects:function(){
    var that = this;

    this.setState({
      isLoading: true,
      projects: [],
      errorMessage: undefined
    });

    projectsApi.getProjects().then(function(projects){
      console.log('fetched and inside react app');
      console.log(projects);
      console.log('fetched and inside react app end');

      that.setState({
        projects:projects,
        isLoading:false,
        errorMessage:undefined
      });

    },function(e){
      console.log(e);
      that.setState({
        isLoading:false,
        projects: [],
        errorMessage: e.message
      });
    });
  },
  render : function(){
    var {isLoading , projects, errorMessage} = this.state;
    console.log(projects);

    var renderSingleProject = () => {
      if(projects.length === 0){
        return (
          <div className="row">
            <p className="container__message">No Projects Added.</p>
          </div>
        );
      }
      return projects.map((project) =>{
        return (
          <SingleProject key={project._id} {...project}  />
        );
      });
    };

    return (
      <div>
        <div className="small-12 medium-12 large-12 portfolio-title-wrap">
          <div className="row portfolio-text-area">
            <div className="small-6 medium-6 large-6">
              <h2 className="portfolio-title">Our Works</h2>
            </div>
            <div className="small-6 medium-6 large-6">
              <p  className="portfolio-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div>
        {renderSingleProject()}
        </div>
        <Footer/>
    </div>
    );
  }
});


module.exports = Portfolio;
