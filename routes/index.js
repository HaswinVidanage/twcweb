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

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	// app.get('/blogs', routes.views.blog);
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);

	// app.get('/gallery', routes.views.gallery);
	//app.all('/contactkey', routes.views.contact);

	//api endpoints
	// API
	app.get('/api/posts', keystone.middleware.api, routes.api.post.getPosts);
	app.post('/api/enquire', keystone.middleware.api, routes.api.enquire.createEnquiry);
	//app.get('/api/posts/:slug', keystone.middleware.api, routes.api.ticket.getTicketById);
	app.get('/api/posts/:id', keystone.middleware.api, routes.api.post.getPostByID);
	// app.post('/api/posts', keystone.middleware.api, routes.api.ticket.createTicket);
	// app.put('/api/posts/:id', keystone.middleware.api, routes.api.ticket.updateTicketById);
	// app.delete('/api/posts/:id', keystone.middleware.api, routes.api.ticket.deleteTicketById);

	// var restful = require('restful-keystone')(keystone);
	//   restful.expose({
	//     Post : true
	//   }).start();

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

	// API FOR Portfolio
	app.get('/api/projects', keystone.middleware.api, routes.api.project.getProjects);

	app.get('/api/careers', keystone.middleware.api, routes.api.careers.getCareers);

};


//creating api endpoints for keystone models// file: routes/index.js


// Pass your keystone instance to the module
//https://github.com/d-pac/restful-keystone
// var restful = require('restful-keystone')(keystone);
//
//
// exports = module.exports = function( app ){
//   //Explicitly define which lists we want exposed
//   restful.expose({
//     Post : true
//   }).start();
// }
