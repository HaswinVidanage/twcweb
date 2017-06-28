var React = require('react');
var projectsApi = require('projectsApi');

var SingleProject = require('SingleProject');
var testJson = require("./test.json");

var Portfolio = React.createClass({

  componentDidMount:function(){
    this.fetchProjects();
    
  },
  fetchProjects:function(){
    var that = this;

    // this.setState({
    //   isLoading: true,
    //   errorMessage: undefined
    // });

    projectsApi.getProjects().then(function(projects){
      console.log('fetched and inside react app');
      console.log(projects);
      console.log('fetched and inside react app end');

      // that.setState({
      //   location:location,
      //   temp:temp,
      //   isLoading:false
      // });
    },function(e){
      console.log(e);
      // that.setState({
      //   isLoading:false,
      //   errorMessage: e.message
      // });
    });
  },
  render : function(){
    return (
      <div>
        <div>
          <SingleProject/>
        </div>
      </div>
    );
  }
});


module.exports = Portfolio;
