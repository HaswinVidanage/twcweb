var React = require('react');
var fullpageJs = require('fullpage.js');

// $(document).ready(function(){
//   // $('#fullpage').fullpage();
//   alert('ready');
// });

var Portfolio = React.createClass({
  componentDidMount: function(){
    $('#fullpage').fullpage();
  },
  render : function(){
    return (
      <div>
        <div id="fullpage">
          <div className="section">Some section</div>
          <div className="section">Some section</div>
          <div className="section">Some section</div>
          <div className="section">Some section</div>
        </div>
      </div>
    );
  }
});


module.exports = Portfolio;
