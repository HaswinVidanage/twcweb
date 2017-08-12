var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');




router.get('*', function(request, response){
  var props = {title : 'Universal React App'};
  console.log('inside index.jsx');
  ReactRouter.match({
    routes: require('./routes.jsx'),
    location: request.url
  }, function(error, redirectLocation, renderProps){
    if (renderProps) {
      //route has matched
      //console.log('RouteMatched Bois', props);
      var html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
          createElement={function(Component, renderProps){
              return <Component {...renderProps} custom={props} />
          }}
        />
      );
      //var html = '<h1>This is to test</h1>'
      response.send(html);
    } else {
      console.log('in  else');
      response.status(404).send('Not Found');
    }
  });

});

module.exports = router;
