var React = require('react');
var blogAPI = require('blogAPI');
import TitleBar from '../common/TitleBar';


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
  fetchPosts:function(){
    var that = this;

    this.setState({
      isLoading: true,
      posts: [],
      errorMessage: undefined
    });

    blogAPI.getPosts().then(function(posts){
      console.log(posts);
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

    console.log(posts);

    var renderSinglePosts = () => {
      if(posts.length === 0){
        return (
          <div className="row">
            <p className="container__message">No Projects Added.</p>
          </div>
        );
      }
      return posts.map((post) =>{
        console.log(post.author.name.first);
        return (
          <div>
            <h1 className="blog-prev-title">{post.title}</h1>
            <div>Uploaded {post.publishedDate} in <span className="highlight">Lifestyle</span> by <span className="highlight">{post.author.name.first +' '+post.author.name.last}</span></div>
            <p className="blog-prev-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
