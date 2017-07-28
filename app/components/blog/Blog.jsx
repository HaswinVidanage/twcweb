var React = require('react');
var blogAPI = require('blogAPI');
import TitleBar from '../common/TitleBar';
var moment = require('moment');
import ReactHtmlParser from 'react-html-parser';
import { Timeline } from 'react-twitter-widgets'
//pagination
//https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js
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
      return posts.map((post, i) =>{
        console.log(`index ${i}`);
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
        <div className="blog-wrap-main">
          <div className="columns small-12 medium-12 large-12 large-centered margin-top-20 blog-wrap-content">
            <div className="columns small-6 medium-6 large-6 small-push-2">
               {/* <h2>PARAM : {this.props.params.article}</h2> */}
              {renderSinglePosts()}
              <ul className="pagination" role="navigation" aria-label="Pagination">
                <li className="pagination-previous disabled">Previous <span className="show-for-sr">page</span></li>
                <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
                <li><a href="#" aria-label="Page 2">2</a></li>
                <li><a href="#" aria-label="Page 3">3</a></li>
                <li><a href="#" aria-label="Page 4">4</a></li>
                <li className="ellipsis" aria-hidden="true"></li>
                <li><a href="#" aria-label="Page 12">12</a></li>
                <li><a href="#" aria-label="Page 13">13</a></li>
                <li className="pagination-next"><a href="#" aria-label="Next page">Next <span className="show-for-sr">page</span></a></li>
              </ul>
            </div>
            <div className="columns small-4 medium-4 large-4 ">
              <Timeline
                 dataSource={{
                   sourceType: 'profile',
                   screenName: 'twcinnovations'
                 }}
                 options={{
                   username: 'twcinnovations',
                   height: '600'
                 }}
                 onLoad={() => console.log('Timeline is loaded!')}
               />
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Blog;
