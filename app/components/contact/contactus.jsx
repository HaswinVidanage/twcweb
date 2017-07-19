var React = require('react');
import TitleBar from '../common/TitleBar';
var DescPanel = require('DescPanel');
var DetailPanel = require('DetailPanel');

var ContactUs = React.createClass({
  getInitialState : function(){
    return {

      title: 'GET IN TOUCH',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    };
  },
  render :function () {
    var {title, content} = this.state;
    return (
      <div>
        <TitleBar title={title} content={content}/>
        <DescPanel/>
        <DetailPanel/>
        
      </div>
    );
  }
});

module.exports = ContactUs;
