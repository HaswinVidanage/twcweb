var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;


//app components
var Main = require('../../app/components/Main.jsx');
var Home = require('Home');
var Blog = require('Blog');
var BlogSingle = require('BlogSingle');
var About = require('About');
var Examples = require('Examples');
var Portfolio = require('Portfolio');
var Web = require('Web');
var MobileApps = require('MobileApps');
var ContactUs = require('ContactUs');

var Home = require('Home');
var Blog = require('Blog');
var BlogSingle = require('BlogSingle');
var About = require('About');
var Examples = require('Examples');
var Portfolio = require('Portfolio');
var Web = require('Web');
var MobileApps = require('MobileApps');
var ContactUs = require('ContactUs');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
//app.css
require('style!css!sass!applicationStyles');

$(document).foundation();


var createElement = null;

if(typeof window === 'object'){

   createElement = function (Component, props) {
    return <Component {...props} custom={window.PROPS}/> ;
  }
} else {
  console.log('Is Not!');
}

console.log(createElement);

module.exports = (
  <Router history={browserHistory} createElement={createElement}>
    <Route path='/' component={require('../../app/views/Layout.jsx')}>
      <IndexRoute  component={require('../../app/views/Index.jsx')}/>
      <Route path='about' component={require('../../app/views/About.jsx')}/>
    </Route>
  </Router>
);
