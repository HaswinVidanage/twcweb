var React = require('react');
var careersAPI = require('careersAPI');
var moment = require('moment');
import Parser from 'html-react-parser';
var ReactDOM = require('react-dom');
var Footer = require('Footer');
var ContactUsBar = require('ContactUsBar');
// import DocumentMeta from 'react-document-meta';
// import {Helmet} from "react-helmet";
import MetaTags from 'react-meta-tags';


var CareersSingle = React.createClass({
  getInitialState : function(){
    return {
      isLoading: false,
      careers: [],
    };
  },
  componentWillMount:function(){
    if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
      console.log('fullpage was there');
      $('#fullpage').fullpage.destroy('all');
    }

    console.log(this.props.params.slug);
    this.fetchPostsBySlug(this.props.params.slug);
  },
  componentDidMount :function(){
    console.log(this.props.params.slug);
  },
  fetchCareerssBySlug:function(slug){
    var that = this;

    this.setState({
      isLoading: true,
      careers: [],
      errorMessage: undefined
    });

    careersAPI.getCareersBySlug(slug).then(function(careers){

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

  render : function(){
    var {careers} = this.state;
    const shareUrl = `https://twcwebs.herokuapp.com/#/blog-single/${careers.slug}`;
    const title = careers.title;

    if(careers.length === 0){
      return (
        <div className="row blog-loading">
          <p className="container__message">Loading...</p>
        </div>
      );
    }

    var renderSinglePost = () => {
      if(careers.length === 0){
        return (
          <div className="row">
            <p className="container__message">No careers Added.</p>
          </div>
        );
      }

      return (

          <div key={careers._id}>
            <div className="blog-prev-content">{Parser(careers.content.extended)}</div>
          </div>
        );
    };

    return (
      <div>
        <MetaTags>
            <title>Page 1</title>
            <meta id="fb-app-id" property="fb:app_id" content="231413577317212"/>
            <meta id="site_name" property="og:site_name" content="TWCInnovations"/>
            <meta id="title" property="og:title" content="twc meta" />
            <meta id="description" property="og:description" content="This is the TWC Innovations Blog Page" />
            <meta id="type" property="og:type" content='http://res.cloudinary.com/haswind/image/upload/v1507491528/utility/twcinnovations-snapshot.png'/>
            <meta id="url" property="og:url" content='https://twcwebs.herokuapp.com/'/>
            <meta id="image" property="og:image" content= {post.image.secure_url} />
        </MetaTags>


        <ContactUsBar/>
        <Footer/>
      </div>
      // </DocumentMeta>
    );
  }
});

module.exports = CareersSingle;
