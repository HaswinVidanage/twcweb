var React = require('react');
import TitleBar from '../common/TitleBar';
var {Link, IndexLink} = require('react-router');
var Footer = require('Footer');
var Cv = require('Cv');

var careersAPI = require('careersAPI');
var cvAPI = require('cvAPI');

import Modal from 'react-responsive-modal';

var moment = require('moment');

var fullpageJs = require('fullpage.js');

const IMG_CAREERS_1 = "http://res.cloudinary.com/haswind/image/upload/v1526468087/careers/careers.png";

const imgArray = [
  IMG_CAREERS_1
];

var state = {
open: false,
};

var Careers = React.createClass({

  handleCv:function(res){
    this.setState({
      isLoading:true
    });
    this.postCv(res);
  },

  postCv:function(res){
    var that = this;
    cvAPI.postCv(res).then(function(){
      console.log('post completed');
      that.setState({
        isLoading:false
      });
    },function(e){
      console.log(e);
    });

  },


  getDefaultProps: function () {
    return{
      title: 'WORK WITH US',
      content: 'careers page contact'
      };
      debugger;
  },
  getInitialState: function () {
    return{
      title: this.props.title,
      content: this.props.content
    };
    debugger;
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

    this.fetchCareers();
  },

  fetchCareers:function(){
    var that = this;

    this.setState({
      isLoading: true,
      careers: [],
      errorMessage: undefined
    });

    careersAPI.getCareers().then(function(careers){
      that.setState({
        careers:careers,
        isLoading:false,
        errorMessage:undefined
      });

    },function(e){
      console.log(e);
      that.setState({
        isLoading:false,
        careers:[],
        errorMessage: e.message
      });
    });
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



onOpenModal: function(){
  this.setState({ open: true });
},

onCloseModal: function(){
  this.setState({ open: false });
},

  render : function(){
    // var title = this.state.title;
    // var content = this.state.content;
const { open } = this.state;

    var {isLoading , careers, errorMessage, title, content} = this.state;

    var renderSingleCareers = () => {
      if(careers.length === 0){
        return (
          <div className="row">
            <p className="container__message">No careers Added.</p>
          </div>
        );
      }
      return careers.map((careers, key) =>{

            return (
              <div className="section small-12 medium-12 large-12">
                  <div className="row align-justify align-middle" id="careersRow">
                    <div className = 'small-4 medium-4 large-4 content column'>
                        <h5><b>{careers.title}</b></h5>
                    </div>
                    <div className = 'small-2 medium-4 large-4 content column'>
                      <p>{careers.description}</p>
                    </div>
                    <div className = 'small-2 medium-2 large-2 content column'>
                      <p>{careers.salary}</p>
                    </div>
                    <div className = 'small-2 medium-2 large-2 content column'>
                      <button className="button btn-round-red-white orange-border hide-for-small-only" onClick={this.onOpenModal}>apply</button>
                      <button className="button tiny btn-round-red-white-small orange-border show-for-small-only" onClick={this.onOpenModal}>apply</button>
                    </div>
                    <div className = 'small-1 medium-2 large-2 content column'>
                    </div>
                  </div>

                  <div>

                    <Modal open={open} onClose={this.onCloseModal} center>
                      <Cv/>
                    </Modal>
                  </div>

              </div>


            );
          }

      );

    };
    return (
      <div id="fullpage" className="small-12 medium-12 large-12">
        <TitleBar title={title} content={content}/>

        <div className="careersPage row">
          <div className="careersTopic small-12 medium-12 large-12 hide-for-small-only">
            <h1>Current openining</h1>
          </div>
          <div className="small-12 medium-12 large-12 show-for-small-only text-center">
            <h1>Current openining</h1>
          </div>

          <div className="backend text-center LR0 text-center">

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


          <div className="footer-row" id="FAQ">
            <div className="row LR0 small-12 medium-12 large-12">
              <span>
              <h1>FAQ</h1>
              <h3>His nut declines throughout your tricky address.</h3>
              <p>A hypothetical potato eases the advantageous bubble.</p>

              <h3>The courier repairs the whistle throughout the frustrated gift</h3>
              <p>The bond bottles the related director behind the confine.</p>

              <h3>Will the ego vat the higher accused?</h3>
              <p>The mole bores after an algorithm.</p>
              </span>
            </div>
          </div>
        <Footer/>
    </div>


    );
  }
});

module.exports = Careers;
