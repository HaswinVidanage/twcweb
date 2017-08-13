var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
import DocumentMeta from 'react-document-meta';



router.get('*', function(request, response){

  ReactRouter.match({
    routes: require('./routes.jsx'),
    location: request.url
  }, function(error, redirectLocation, renderProps){
    if (renderProps) {
      //route has matched
      //console.log('RouteMatched Bois', props);
      //var meta = DocumentMeta.renderAsHTML();
      var props = {customMeta : '<title>HASWIN</title>'};
      var meta = <title>VIDANAGE</title>;
      var html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
          createElement={function(Component, renderProps){
              return <Component {...renderProps} custom={props} meta = {meta}/>
          }}
        />
      );
      // const meta = DocumentMeta.renderAsHTML();
      // console.log('META INDEX.jsx' , meta);
      // console.log(meta);
      // props = {meta : meta};
      // console.log('props', props);

      //var html = '<h1>This is to test</h1>'
      response.send(html);
    } else {
      console.log('in  else');
      response.status(404).send('Not Found');
    }
  });

});

module.exports = router;
