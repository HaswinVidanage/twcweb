var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var createElement = [];

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
