import React, { Component } from 'react';
var moment = require('moment');

class BlogBar extends Component {
  static defaultProps = {
    title: '',
    publishedDate: '' ,
    categoryName :'',
    authorName : '',
  };


  render() {

    return (
      <div className="small-12 medium-12 large-12 titlebar-title-wrap">
        <div className="row blogbar-text-area">
          <div className="small-12 medium-12 large-12 small-centered">
            <h2 className="titlebar-title">{this.props.title}</h2>
            <p  className="titlebar-content">
              <div>Uploaded {moment(this.props.publishedDate).fromNow()} under {this.props.categoryName} <span className="highlight"></span>
              <br/> by <span className="highlight-single-name">{this.props.authorName}</span></div>
             </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogBar;
