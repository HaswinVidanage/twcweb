var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps:function(){
    return{
      title:'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var {title,message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="text-center tiny reveal" data-reveal="">
          <h4>{title}</h4>

          <p>{message}</p>

          <p>
            <button className="hollow button" data-close="">Okay</button>
          </p>

      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var model = new Foundation.Reveal($('#error-modal'));
    model.open();


  },

  render :function(){

    return (
      <div>
      </div>
    );

  }
});

module.exports = ErrorModal;
