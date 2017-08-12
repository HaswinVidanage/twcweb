var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;


// //Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// //app.css
// require('style!css!sass!applicationStyles');

//$(document).foundation();

//app components
var Main = require('../../app/components/Main.jsx');
var Home = require('../../app/components/Home.jsx');
var Blog = require('../../app/components/blog/Blog.jsx');
var BlogSingle = require('../../app/components/blog/BlogSingle.jsx');
var About = require('../../app/components/About.jsx');
// var Examples = require('../../app/components/Examples.jsx');
// var Portfolio = require('../../app/components/portfolio/Portfolio.jsx');
// var Web = require('../../app/components/services/Web.jsx');
// var MobileApps = require('../../app/components/services/MobileApps.jsx');
// var ContactUs = require('../../app/components/contact/contactus.jsx');
// var Nav  = require('../../app/components/Nav.jsx');




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
  // <Route path='/' component={require('../../app/views/Layout.jsx')}>
  //   <IndexRoute  component={require('../../app/views/Index.jsx')}/>
  //   <Route path='about' component={require('../../app/views/About.jsx')}/>
  // </Route>
  <Router history={browserHistory} createElement={createElement}>
    <Route path='/' component={Main}>
      <IndexRoute  component={Home}/>
      <Route path="about" component={About}/>
      <Route  path="blog" component={Blog}/>
      <Route  path="blog-single/:slug" component={BlogSingle}/>
      {/*<Route path="contact" component={ContactUs}/>
      <Route path="contact-form" component={ContactUs}/>
      <Route path="examples" component={Examples}/>
      <Route path="portfolio" component={Portfolio}/>


      <Route path="websites" component={Web}/>
      <Route path="mobileapps" component={MobileApps}/> */}
    </Route>
  </Router>
);
