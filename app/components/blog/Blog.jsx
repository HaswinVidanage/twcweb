var React = require('react');
var {Link, IndexLink} = require('react-router');
var blogAPI = require('blogAPI');
import TitleBar from '../common/TitleBar';
var moment = require('moment');
import Parser from 'html-react-parser';
var ReactDOM = require('react-dom');
import { Timeline } from 'react-twitter-widgets';

const PostsPerPage = 3;

//pagination
//https://github.com/AdeleD/react-paginate/blob/master/demo/js/demo.js
var Blog = React.createClass({
  getInitialState : function(){
    return {
      selectedPageNumber : 1,
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

  changePage : function (selectedPageNumber) {
    console.log('selectedPageNumber', selectedPageNumber);
    this.setState({
      selectedPageNumber : selectedPageNumber
    });
  },

  previousPage: function(){
    this.setState({
      selectedPageNumber : (this.state.selectedPageNumber - 1)
    });
  },

  nextPage: function(){
    this.setState({
      selectedPageNumber : (this.state.selectedPageNumber + 1)
    });
  },

  render : function(){
    var {title, content, posts, selectedPageNumber} = this.state;
    var startPostKey = PostsPerPage * (selectedPageNumber - 1);
    var endPostKey = startPostKey + PostsPerPage;
    console.log('startPostKey' , startPostKey);
    console.log('endPostKey', endPostKey);

    var renderPagination = () => {
        var totalPages = 0;
        let postLength =  posts.length;

        totalPages = Math.ceil(postLength / PostsPerPage);
        console.log('totalPages!!', totalPages);
        let contents = [];
        let content;
        console.log('selectedPageNumber', selectedPageNumber);
        console.log('this.state.selectedPageNumber === 0', this.state.selectedPageNumber == 1);
        content = (this.state.selectedPageNumber === 1)?<li className="pagination-previous disabled">Previous</li> : <li className="pagination-previous"><a onClick = {() => {this.previousPage()}}>Previous</a></li>
        contents.push(content);

        for (var i = 1; i <= totalPages; i++) {
          content = <li><a key={i} value={i} onClick = {this.changePage.bind(this, i)} className={(i === selectedPageNumber)?'pg-active-page': ''} >{i}</a></li>
          contents.push(content);
        }
        console.log('totalPages', totalPages);
        console.log('this.state.selectedPageNumber === totalPages',this.state.selectedPageNumber === totalPages);
        content = (this.state.selectedPageNumber === totalPages)?<li className="pagination-next disabled">Next</li> : <li className="pagination-next"><a onClick = {() => {this.nextPage()}}>Next</a></li>
        contents.push(content);

        return (
          <span>
            { contents }
          </span>
        );

        // <ul className="pagination" role="navigation" aria-label="Pagination">
        //   <li className="pagination-previous disabled">Previous <span className="show-for-sr">page</span></li>
        //   <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
        //   <li><a href="#" aria-label="Page 2">2</a></li>
        //   <li><a href="#" aria-label="Page 3">3</a></li>
        //   <li><a href="#" aria-label="Page 4">4</a></li>
        //   <li className="ellipsis" aria-hidden="true"></li>
        //   <li><a href="#" aria-label="Page 12">12</a></li>
        //   <li><a href="#" aria-label="Page 13">13</a></li>
        //   <li className="pagination-next"><a href="#" aria-label="Next page">Next <span className="show-for-sr">page</span></a></li>
        // </ul>

    };
    var renderSinglePosts = () => {
      if(posts.length === 0){
        return (
          <div className="row">
            <p className="container__message">No Projects Added.</p>
          </div>
        );
      }

      return posts.map((post, key) =>{
          if(key >= startPostKey && key < endPostKey){
            var link = `/blog-single/${post.slug}`;
            return (
              <div key={post._id}>
                <Link to={link} >
                  <h1 className="blog-prev-title">{post.title}</h1>
                </Link>
                <div>Uploaded {moment(post.publishedDate).fromNow()} under {post.categories.name}<span className="highlight"></span> by <span className="highlight">{post.author.name.first +' '+post.author.name.last}</span></div>
                <p className="blog-prev-content">{Parser(post.content.brief)}</p>
              </div>
            );
          }

      });
    };

    return (
      <div>
        <TitleBar title={title} content={content}/>
        <div className="blog-wrap-main no-left-padding">
          <div className="columns small-12 medium-12 large-12 large-centered margin-top-20 no-left-padding">
            <div className="columns small-6 medium-6 large-6 small-push-2 no-left-padding">
              { renderSinglePosts()}

              <ul className="pagination" role="navigation" aria-label="Pagination">
                { renderPagination() }
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
                   height: '600',
                   chrome:'nofooter noscrollbar'

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
