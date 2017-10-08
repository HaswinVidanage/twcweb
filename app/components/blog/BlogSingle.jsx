var React = require('react');
var blogAPI = require('blogAPI');
import BlogBar from '../common/BlogBar';
var moment = require('moment');
import Parser from 'html-react-parser';
var ReactDOM = require('react-dom');
var Footer = require('Footer');
var ContactUsBar = require('ContactUsBar');
import { FacebookButton, FacebookCount } from "react-social";
// import DocumentMeta from 'react-document-meta';
// import {Helmet} from "react-helmet";
import MetaTags from 'react-meta-tags';

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
    const title = post.title;

    <meta property="fb:app_id" content="231413577317212"/>
    const meta = {
      title: 'Facebook Meta ',
      app_id: '231413577317212',

      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };

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
        <MetaTags>
            <title>Page 1</title>
            <meta id="fb-app-id" property="fb:app_id" content="231413577317212"/>
            <meta id="site_name" property="og:site_name" content="twcinnovations"/>
            <meta id="title" property="og:title" content="twc meta" />
            <meta id="description" property="og:description" content="twc meta" />
            <meta id="type" property="og:type" content='http://www.example.com/images/xxx.png'/>
            <meta id="url" property="og:url" content='https://twcwebs.herokuapp.com/'/>
            <meta id="image" property="og:image" content= {post.image.secure_url} />
        </MetaTags>
        <BlogBar title={post.title}
          publishedDate = {post.publishedDate}
          categoryName = {post.categories.name}
          authorName = {post.author.name.first +' '+post.author.name.last}
        />
        <div className="blog-wrap-main no-left-padding margin-top-20">
          <div className="small-8 medium-8 large-8 small-centered">
              {renderSinglePost()}
              <div className="small-1 columns social-icons">
                <span id='facebook-share'>
                  <FacebookShareButton
                    url={shareUrl}
                    title={title}
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
                </span>
              </div>
              <div className="small-1 columns social-icons">
                <span id='googleplus-share'>
                  <GooglePlusShareButton
                    url={shareUrl}
                    title={title}
                    // picture={`${String(window.location)}/${exampleImage}`}
                    className="Demo__some-network__share-button">
                    <GooglePlusIcon
                      size={32}
                      round />
                  </GooglePlusShareButton>
                  <GooglePlusShareCount
                    url={shareUrl}
                    className="Demo__some-network__share-count">
                    {count => count}
                  </GooglePlusShareCount>
                </span>
              </div>
              <div className="small-1 columns social-icons">
                <span id='linkedin-share'>
                  <LinkedinShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button">
                    <LinkedinIcon
                      size={32}
                      round />
                  </LinkedinShareButton>
                  <LinkedinShareCount
                    url={shareUrl}
                    className="Demo__some-network__share-count">
                    {count => count}
                  </LinkedinShareCount>
                </span>
              </div>
              <div className="small-1 columns social-icons">
                <span id='twitter-share'>
                  <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button">
                    <TwitterIcon
                      size={32}
                      round />
                  </TwitterShareButton>
                </span>
              </div>
              <div className="small-1 columns social-icons">
                <span id='whatsapp-share'>
                  <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button">
                    <WhatsappIcon
                      size={32}
                      round />
                  </WhatsappShareButton>
                </span>
              </div>


          </div>
        </div>
        <ContactUsBar/>
        <Footer/>
      </div>
      // </DocumentMeta>
    );
  }
});

module.exports = BlogSingle;
