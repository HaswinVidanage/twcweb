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
      content: 'We believe that our work reflects our passion and creativity towards providing you a better solution to improve your business.'
    };
  },
  componentWillMount:function(){

    if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
      console.log('fullpage was there');
      $('#fullpage').fullpage.destroy('all');
    }
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
          <SingleProject  key={project._id} {...project}  />
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
