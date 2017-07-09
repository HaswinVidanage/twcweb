import React, { Component } from 'react';


class FounderMessage extends Component {
  static defaultProps = {
    title: '',
    content: '',
    value: 0,
    previous: 0
  };

  render() {

    return (
      <div className="small-12 medium-12 large-12">
        <div className="">
          <div className="founder-message-wrap">
            <div className="small-12 medium-12 large-12 ">
              <h2 className="founder-title">We help breed amazing products</h2>
            </div>
            <div className="small-12 medium-12 large-12 ">
              <p className="founder-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="small-12 medium-12 large-12 founder-quot-wrap">
              <p className="founder-quot">I have seen the growth of TWC and have also been a client from the beginging.
                 They are very passionate and enthusiastic about their work.</p>
            </div>

            <div className="small-12 medium-12 large-12 ">
              <div className="row">
                <div className="small-6 medium-6 large-6  round-img-div rows"><div className="founder-img"/></div>
                <div className="small-6 medium-6 large-6 round-img-title-div rows">
                  <div><h5>- Nafeel Jalaldeen</h5></div>
                  <div>&nbsp;&nbsp;&nbsp;Founder TWC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FounderMessage;
