var React = require('react');
var blogAPI = require('blogAPI');
import TitleBar from '../common/TitleBar';
var moment = require('moment');
import Parser from 'html-react-parser';
var ReactDOM = require('react-dom');

var BlogSingle = React.createClass({
  getInitialState : function(){
    return {
      isLoading: false,
      post: [],
      title: 'Our Single Blog',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
    var {title, content, post} = this.state;

    console.log(post);
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
            <h1 className="blog-prev-title">{post.title}</h1>
            <div>Uploaded {moment(post.publishedDate).fromNow()} under {post.categories.name}<span className="highlight"></span> by <span className="highlight">{post.author.name.first +' '+post.author.name.last}</span></div>
            <p className="blog-prev-content">{Parser(post.content.extended)}</p>
          </div>
        );
    };

    return (
      <div>
        <TitleBar title={title} content={content}/>
        <div className="blog-wrap-main no-left-padding">
          <div className="columns small-12 medium-12 large-12 large-centered margin-top-20 no-left-padding">
            <div className="columns small-6 medium-6 large-6 small-push-2 no-left-padding">
               {/* <h2>PARAM : {this.props.params.article}</h2> */}
              {renderSinglePost()}

            </div>
            <div className="columns small-4 medium-4 large-4 ">

            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = BlogSingle;
