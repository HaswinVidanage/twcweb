var React = require('react');
import TitleBar from '../common/TitleBar';

var Footer = require('Footer');
var ContactUsBar = require('ContactUsBar');
// var careersAPI = require('careersAPI');

// var SingleCareers = require('SingleCareers');
// var fullpageJs = require('fullpage.js');

const IMG_CAREERS_1 = "http://res.cloudinary.com/haswind/image/upload/v1526468087/careers/careers.png";

const imgArray = [
  IMG_CAREERS_1
];

var Careers = React.createClass({
  getDefaultProps: function () {
    return{
      title: 'WORK WITH US',
      content: 'careers page contact'
      };
  },
  getInitialState: function () {
    return{
      title: this.props.title,
      content: this.props.content
    };
  },
  handleNewData: function(updates) {
    this.setState(updates);
  },
  render : function(){
    var title = this.state.title;
    var content = this.state.content;
    return (
      <div>
        <TitleBar title={title} content={content}/>

        <div className="careersPage row">
          <div className="careersTopic small-12 medium-12 large-12">
            <h1>Current openining</h1>
          </div>
          <div className="carrersImage small-12 medium-12 large-12 text-center">
            <img src={IMG_CAREERS_1}/>
          </div>
        </div>
          <div className="row">
            <div className="careersContact small-12 medium-12 large-12">
              <div className="careersExtra small-12 medium-8 large-8">
                <h2>Didn't find the right position for you?</h2>
                <p>The palace gasps an invented bounce around a remainder. The engine spoils a spurious nostalgia. A least resistance distributes every marriage inside the deal ideal. The ripping haircut hears the stunned independence. The punished norm bobs.</p>
              </div>
              <div className="careersContactBtn small-12 medium-4 large-4">
                <button>ContactUs</button>
              </div>
            </div>
          </div>


        <div className="row" id="FAQ">
          <div className="careersFAQ small-12 medium-12 large-12">
            <h1>FAQ</h1>
            <h3>His nut declines throughout your tricky address.</h3>
            <p>A hypothetical potato eases the advantageous bubble.</p>

            <h3>The courier repairs the whistle throughout the frustrated gift</h3>
            <p>The bond bottles the related director behind the confine.</p>

            <h3>Will the ego vat the higher accused?</h3>
            <p>The mole bores after an algorithm.</p>
          </div>
        </div>

    </div>
    );
  }
});

module.exports = Careers;
