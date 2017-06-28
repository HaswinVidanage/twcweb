var React = require('react');
var projectsApi = require('projectsApi');

var SingleProject = require('SingleProject');
var testJson = require("./test.json");

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
          <p className="container__message">No Projects Added.</p>
        );
      }
      return projects.map((project) =>{
        return (
          <SingleProject key={project._id} {...project} />
        );
      });
    };

    return (
      <div>
      {renderSingleProject()}
    </div>
    );
  }
});


module.exports = Portfolio;
