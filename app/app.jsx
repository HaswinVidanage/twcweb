var React = require('react');
var ReactDOM = require('react-dom');
//es6 object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
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


ReactDOM.render(
   <Router history={hashHistory}>
     <Route path="/" component={Main}>
       <Route path="about" component={About}/>
       <Route path="contact" component={ContactUs}/>
       <Route path="contact-form" component={ContactUs}/>
       <Route path="examples" component={Examples}/>
       <Route path="portfolio" component={Portfolio}/>
       <Route  path="blog" component={Blog}/>
       <Route  path="blog-single/:slug" component={BlogSingle}/>

       <Route path="websites" component={Web}/>
       <Route path="mobileapps" component={MobileApps}/>

       <IndexRoute component={Home}/>
     </Route>
   </Router>,
   document.getElementById('app')
);
