var React = require('react');
import TitleBar from '../common/TitleBar';
var {Link, IndexLink} = require('react-router');
var Footer = require('Footer');
var careersAPI = require('careersAPI');

// var SingleCareers = require('SingleCareers');
var fullpageJs = require('fullpage.js');

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
  componentWillMount: function() {
    //add this so fullpage js won't give error saying you called it multiple times
    if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
      console.log('fullpage was there');
      $('#fullpage').fullpage.destroy('all');
    }

  },
  componentDidMount: function(){
    $('#fullpage').fullpage({
              'scrollBar': false,
              'verticalCentered': false,
              'menu': false,
              'anchors': ['?0', '?1', '?2','?3','?4','?5'],
              'autoScrolling': false,
              'scrollOverflow': false,
              'fitToSection':false,
              'recordHistory': false,
              'css3':true,
              'easingcss3': 'ease-out',
              'recordHistory': false,

              'afterLoad': function(anchorLink, index){

              }

          });


  },
  render : function(){
    // var title = this.state.title;
    // var content = this.state.content;

    var {isLoading , careers, errorMessage, title, content} = this.state;

    var renderSingleCareers = () => {
      // if(careers.length === 0){
      //   return (
      //     <div className="row">
      //       <p className="container__message">No careers Added.</p>
      //     </div>
      //   );
      // }
      // return careers.map((careers) =>{
      //   return (
      //     <SingleCareers  key={careers._id} {...careers}  />
      //   );
      // });
    };
    return (
      <div id="fullpage" className="small-12 medium-12 large-12">
        <TitleBar title={title} content={content}/>

        <div className="careersPage row">
          <div className="careersTopic small-12 medium-12 large-12">
            <h1>Current openining</h1>
          </div>

          <div className="backend text-center">
           <h1>this area is for the back end</h1>
            <div className="jobs row text-center">
              <div className="small-4 medium-4 large-4">
                <p>Web Developer</p>
              </div>
              <div className="small-4 medium-4 large-4">
                <p>HTML</p>
              </div>
              <div className="small-4 medium-4 large-4">
                <p>Full Time | 50, 000 LKR</p>
              </div>

            </div>
            {renderSingleCareers()}
          </div>
          <div className="carrersImage small-12 medium-12 large-12 text-center">
            <img src={IMG_CAREERS_1}/>
          </div>

            <div className="row careersContact small-12 medium-12 large-12">
              <div className="careersExtra small-12 medium-8 large-8" id="cc">
                <div className="align-center">
                  <div className="justify-text">
                    <h2 className="">Didn't find the right position for you?</h2>
                    <p className="">The palace gasps an invented bounce around a remainder. The engine spoils a spurious nostalgia. A least resistance distributes every marriage inside the deal ideal. The ripping haircut hears the stunned independence. The punished norm bobs.</p>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-4 large-4 text-center hide-for-small-only">
                <div className="careersContactBtnWeb">
                  <Link to="/contact" className="button btn-round-red-white orange-border" >Contact Us</Link>
                </div>
              </div>
              <div className="small-12 medium-4 large-4 text-center show-for-small-only">
                <div className="careersContactBtnMob">
                  <Link to="/contact" className="button btn-round-red-white orange-border" >Contact Us</Link>
                </div>
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
        <Footer/>
    </div>


    );
  }
});

module.exports = Careers;
