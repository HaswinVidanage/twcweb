import React, { Component } from 'react';


class TitleBar extends Component {
  static defaultProps = {
    title: '',
    content: ''
  };


  render() {

    return (
      <div className="small-12 medium-12 large-12 titlebar-title-wrap">
        <div className="row titlebar-text-area">
          <div className="small-12 medium-6 large-6">
            <h2 className="titlebar-title">{this.props.title}</h2>
          </div>
          <div className="small-12 medium-6 large-6">
            <p  className="titlebar-content">{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleBar;
