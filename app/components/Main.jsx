var React = require('react');
var Nav = require('../../app/components/Nav.jsx');
var Link = require('react-router').Link;





var Main = React.createClass({
  componentDidMount : function() {
    // Create a window object.  See also: https://github.com/fgnass/domino#usage

    //Load foundation
    require('style!css!foundation-sites/dist/foundation.min.css');
    //app.css
    require('style!css!sass!applicationStyles');

    $(document).foundation();

  },
  getInitialState : function(){
    return {
      customMeta : <title>1TWC Innovations</title>
    };
  },
  render : function() {
    var custom = this.props.custom;
    //var meta = this.props.meta;
     var customMeta = this.state.customMeta;
    // console.log('Meta at Main', this.props.custom.meta);
    // console.log('Props at Main', custom);
    var renderCustomMeta = function() {
      console.log('MAIN JSX META ', customMeta);
      return customMeta;
      //console.log(meta);
      //return meta;
    };
    return (
      <html>
        {/* <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {renderCustomMeta()}



        </head> */}
        <body>
            <div className="main-wrapper">
              <div className="main-nav-wrapper">
                <Nav/>
              </div>
              <div >
                <div>{this.props.children}</div>
              </div>
          </div>
          <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS='+JSON.stringify(custom)
          }}/>
          <link rel="stylesheet" type="text/css" href="/js/fullpagejs/javascript.fullPage.css" />
          <script src="/js/fullpagejs/javascript.fullPage.js"></script>
          <script src ='/bundle.js'/>
          <script  src="js/twc/web.js"></script>
        </body>
      </html>
    )
  }
});
module.exports = Main;
