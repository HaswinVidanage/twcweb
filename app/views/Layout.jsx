var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  displayName : 'Layout',

  getInitialState : function(){
    return {
      isLoading: false,
    };
  },
  _handleClick : function(){
    this.setState({
        isLoading: true
      });

    //alert('Clicked');
  },
  render : function(){
    var custom = this.props.custom;
    var {isLoading} = this.state;
    var renderLoading = function(){
      if(isLoading)
        return <h3>LOADING ....</h3>
      else
        return <h3>idling</h3>
    };
    return (
        <html>
          <head>
            <title>{custom.title}</title>
            <link rel='stylesheet' href='/style.css'/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.2/css/foundation.min.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.2/js/foundation.min.js"/>

          </head>
          <body>
            <div>
              <h1>{custom.title}</h1>
              {renderLoading()}
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button onClick={this._handleClick}>Click Me</button>
            </div>
            {this.props.children}
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
            <script dangerouslySetInnerHTML={{
              __html: 'window.PROPS='+JSON.stringify(custom)
            }}/>
            <script src ='/bundle.js'/>
          </body>
        </html>

    );
  }
});
