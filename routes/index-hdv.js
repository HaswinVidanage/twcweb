/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

// var keystone = require('keystone');
// var middleware = require('./middleware');
// var importRoutes = keystone.importer(__dirname);

var express = require('express');

// Common Middleware
// keystone.pre('routes', middleware.initLocals);
// keystone.pre('render', middleware.flashMessages);
//
// // Import Route Controllers
// var routes = {
// 	views: importRoutes('./views'),
// };

//Haswin Add
//Server

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
		console.log('req.url');
  }else{
    next();
  }

});
app.use(express.static('public'));

app.listen(PORT,function(){
  console.log('Express server is up on port '+ PORT);
});

//Rest Api
// file: routes/index.js
var keystone = require('keystone');

// Pass your keystone instance to the module
var restful = require("restful-keystone")(keystone, {
    root: "/api/v1"
});

// ...

exports = module.exports = function( app ){
  //Explicitly define which lists we want exposed
  restful.expose({
    Post : true
  }).start();
}


// Setup Route Bindings
//exports = module.exports = function (app) {
	// Views
	// app.get('/', routes.views.index);
	//
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);
	// app.get('/gallery', routes.views.gallery);
	// app.all('/contact', routes.views.contact);


	// Handles all routes so you do not get a not found error
	// app.get('*', function (request, response){
	//     response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
	// });

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

//};
