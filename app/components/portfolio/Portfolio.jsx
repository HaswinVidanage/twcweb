var React = require('react');
import TitleBar from '../common/TitleBar';

var Footer = require('Footer');
var projectsApi = require('projectsApi');

var SingleProject = require('SingleProject');
var fullpageJs = require('fullpage.js');

var Portfolio = React.createClass({
  getInitialState : function(){
    return {
      isLoading: true,
      projects: [],
      errorMessage: undefined,
      title: 'OUR WORKS',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
    var {isLoading , projects, errorMessage, title, content} = this.state;
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

        <TitleBar title={title} content={content}/>

        <div>
        {renderSingleProject()}
        </div>

    </div>
    );
  }
});


module.exports = Portfolio;
