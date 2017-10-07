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
              <p className="founder-message">Technology as it self develops rapidly as we wait in lack of innovation, therefore TWC
              Innovations will satiate the lack of innovation, creativity and vision in the IT industry. We hold highly trained developers and marketers to derive the best market offer to optimize customer satisfaction to its best by closely branching out and merging Australian technology. TWC Innovations vow to create its best every second and as our slogan speaks for itself “Creativity ahead with TWC!!”
              </p>
            </div>

            <div className="small-12 medium-12 large-12 founder-quot-wrap">
              <p className="founder-quot">
                We have always developed with our employees and customers and been an integral part for their success. Thank you to all who believed in the process and teamed with Team TWC Innovations to achieve that common goal.</p>
            </div>

            <div className="small-12 medium-12 large-12 ">
              <div className="row">
                <div className="small-6 medium-6 large-6  round-img-div rows"><div className="founder-img"/></div>
                <div className="small-6 medium-6 large-6 round-img-title-div rows">
                  <div>
                    <div><h5 className="founder-name">- Nafeel Jalaldeen</h5></div>
                    <div className="founder-name">&nbsp;&nbsp;&nbsp;Co-founder TWC</div>
                  </div>
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
