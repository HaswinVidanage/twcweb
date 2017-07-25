var React = require('react');
import TitleBar from '../common/TitleBar';

var Blog = React.createClass({
  getInitialState : function(){
    return {

      title: 'Our Blog',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    };
  },
  render : function(){
    var {title, content} = this.state;

    return (
      <div>
        <TitleBar title={title} content={content}/>
        <div className="row">
          <div className="columns small-12 medium-12 large-12 large-centered margin-top-20">
            <div className="columns small-8 medium-8 large-8 ">
              <h1 className="blog-prev-title">Blog Title 1</h1>
              <div>03 November 2017 in <span className="highlight">Lifestyle</span> by <span className="highlight">Haswin Vidanage</span></div>
              <p className="blog-prev-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
