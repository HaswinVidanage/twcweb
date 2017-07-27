var React = require('react');
var blogAPI = require('blogAPI');
import TitleBar from '../common/TitleBar';
var moment = require('moment');
import ReactHtmlParser from 'react-html-parser';

var Blog = React.createClass({
  getInitialState : function(){
    return {
      isLoading: false,
      posts: [],
      title: 'Our Blog',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    };
  },
  componentWillMount:function(){
    this.fetchPosts();
  },
  componentDidMount :function(){
  //  console.log(this.props.params.article);
    // var day = moment("2017-05-23T18:30:00.000Z").fromNow();
    // console.log(day);
  },
  fetchPosts:function(){
    var that = this;

    this.setState({
      isLoading: true,
      posts: [],
      errorMessage: undefined
    });

    blogAPI.getPosts().then(function(posts){

      that.setState({
        posts:posts,
        isLoading:false,
        errorMessage:undefined
      });

    },function(e){
      console.log(e);
      that.setState({
        isLoading:false,
        posts:[],
        errorMessage: e.message
      });
    });
  },

  render : function(){
    var {title, content, posts} = this.state;

    var renderSinglePosts = () => {
      if(posts.length === 0){
        return (
          <div className="row">
            <p className="container__message">No Projects Added.</p>
          </div>
        );
      }
      return posts.map((post) =>{

        return (
          <div key={post._id}>
            <h1 className="blog-prev-title">{post.title}</h1>
            <div>Uploaded {moment(post.publishedDate).fromNow()} under {post.categories.name}<span className="highlight"></span> by <span className="highlight">{post.author.name.first +' '+post.author.name.last}</span></div>
            <p className="blog-prev-content">{ReactHtmlParser(post.content.brief)}</p>
          </div>
        );
      });
    };

    return (
      <div>
        <TitleBar title={title} content={content}/>
        <div className="row">
          <div className="columns small-12 medium-12 large-12 large-centered margin-top-20">
            <div className="columns small-8 medium-8 large-8 ">
               {/* <h2>PARAM : {this.props.params.article}</h2> */}
              {renderSinglePosts()}
            </div>
            <div className="columns small-4 medium-4 large-4 ">
              <h1>Facebook/ Twitter Panel</h1>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Blog;
