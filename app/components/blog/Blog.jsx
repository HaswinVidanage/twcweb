var React = require('react');
var blogAPI = require('blogAPI');
import TitleBar from '../common/TitleBar';
var moment = require('moment');
// import ReactHtmlParser from 'react-html-parser';
import Parser from 'html-react-parser';
var ReactDOM = require('react-dom');
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
    if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
      console.log('fullpage was there');
      $('#fullpage').fullpage.destroy('all');
    }


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
            <p className="blog-prev-content">{Parser(post.content.brief)}</p>
          </div>
        );
      });
    };

    return (
      <div>
        <TitleBar title={title} content={content}/>
        <div className="blog-wrap-main no-left-padding">
          <div className="columns small-12 medium-12 large-12 large-centered margin-top-20 no-left-padding">
            <div className="columns small-6 medium-6 large-6 small-push-2 no-left-padding">
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
                 onLoad={() =>
                   {
                    $("iframe#twitter-widget-0").contents().find(".timeline-Header").css({
                      'background-color' : '#24b4ff',
                      'padding': '18px'
                    });

                    $("iframe#twitter-widget-0").contents().find(".timeline-Header-title").css({
                      'color' : '#fff'
                    });

                    $("iframe#twitter-widget-0").contents().find(".timeline-Header-byline").css({
                      'font-size': '1px',
                      'color': '#24b4ff'
                    });

                    // $("iframe#twitter-widget-0").contents().find(".customisable-highlight").css({
                    //   'font-size': '16px',
                    //   'font-weight': '100',
                    //   'line-height': '16px',
                    //   'color': 'white',
                    //   'display':'block'
                    // });
                    // $("iframe#twitter-widget-0").contents().find(".TweetAuthor-name").css({
                    //   'color': 'black!important'
                    // });
                   }
               }
               />
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Blog;
