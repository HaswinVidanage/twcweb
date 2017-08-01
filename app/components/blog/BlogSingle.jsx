var React = require('react');
var blogAPI = require('blogAPI');
import BlogBar from '../common/BlogBar';
var moment = require('moment');
import Parser from 'html-react-parser';
var ReactDOM = require('react-dom');
var Footer = require('Footer');
var ContactUsBar = require('ContactUsBar');

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');

var BlogSingle = React.createClass({
  getInitialState : function(){
    return {
      isLoading: false,
      post: [],
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
  fetchPostsBySlug:function(slug){
    var that = this;

    this.setState({
      isLoading: true,
      post: [],
      errorMessage: undefined
    });

    blogAPI.getPostsBySlug(slug).then(function(post){

      that.setState({
        post:post,
        isLoading:false,
        errorMessage:undefined
      });

    },function(e){
      console.log(e);
      that.setState({
        isLoading:false,
        post:[],
        errorMessage: e.message
      });
    });
  },

  render : function(){
    var {post} = this.state;
    const shareUrl = `https://twcwebs.herokuapp.com/#/blog-single/${post.slug}`;

    //const shareUrl = `www.test.com`;
    const title = 'Blog';

    if(post.length === 0){
      return (
        <div className="row">
          <p className="container__message">Loading...</p>
        </div>
      );
    }

    var renderSinglePost = () => {
      if(post.length === 0){
        return (
          <div className="row">
            <p className="container__message">No Projects Added.</p>
          </div>
        );
      }

      return (

          <div key={post._id}>
            <div className="blog-prev-content">{Parser(post.content.extended)}</div>
          </div>
        );
    };

    return (
      <div>

        <BlogBar title={post.title}
          publishedDate = {post.publishedDate}
          categoryName = {post.categories.name}
          authorName = {post.author.name.first +' '+post.author.name.last}
        />
        <div className="blog-wrap-main no-left-padding margin-top-20">
          <div className="small-8 medium-8 large-8 small-centered">
               {/* <h2>PARAM : {this.props.params.article}</h2> */}
              {renderSinglePost()}

              <div className="Demo__some-network">
                <FacebookShareButton
                  url={shareUrl}
                  title={title}
                  // picture={`${String(window.location)}/${exampleImage}`}
                  className="Demo__some-network__share-button">
                  <FacebookIcon
                    size={32}
                    round />
                </FacebookShareButton>

                <FacebookShareCount
                  url={shareUrl}
                  className="Demo__some-network__share-count">
                  {count => count}
                </FacebookShareCount>
              </div>
          </div>

        </div>
        <ContactUsBar/>
        <Footer/>
      </div>
    );
  }
});

module.exports = BlogSingle;