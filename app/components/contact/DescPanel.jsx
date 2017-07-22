var React = require('react');


var DescPanel = React.createClass({

  onButtonClicked : function(id){
    return () => {
      this.props.onBtnClick(id);
    }
  },
  render :function () {
    return (
      <div>
        <div className="contact-desc">
          <div className="contact-desc-wrap">
            <h5 className="contact-desc-title">We are pleased to hear from you</h5>
            <p className="contact-desc-subtitle">Please select the purpose of your inquiry</p>
            <div className="row">
              <div className="small-12 medium-12 large-12">
                <div className="small-12 medium-4 large-4 columns">
                  <div className="small-12 medium-12 large-12 ">
                    <img src ="https://i.gyazo.com/e281e27fd646b6dd844922fc6d051354.png"/>
                  </div>
                  <div className="small-12 medium-12 large-12 ">
                    <div className="contact-title">Request A Demo</div>
                    <p className="inquiry-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                    <div className="small-12 medium-12 large-12">
                      <div className="contact-btn-desc-wrap">
                        <a href="#contact-form" id="back" className="button btn-round-red-white orange-border" refs="btnDemo" onClick={this.onButtonClicked(0)}>Request a Demo</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="small-12 medium-4 large-4 columns">
                  <div className="small-12 medium-12 large-12 ">
                    <img src ="https://i.gyazo.com/930e5b728e619ca3feef3db2d1a904a4.png"/>
                  </div>
                  <div className="small-12 medium-12 large-12 ">
                    <div className="contact-title">Sales Inquiry</div>
                    <p className="inquiry-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="small-12 medium-12 large-12">
                      <div className="contact-btn-desc-wrap">
                        <a href="#contact-form" className="button btn-round-red-white orange-border"  refs="btnSales" onClick={this.onButtonClicked(1)}>&nbsp;&nbsp;&nbsp;Sales Inquiry&nbsp;&nbsp;&nbsp;</a>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="small-12 medium-4 large-4 columns">
                  <div className="small-12 medium-12 large-12 ">
                    <img src ="https://i.gyazo.com/f2403fcd08ad58fa5f1caa0183d20332.png"/>
                  </div>
                  <div className="small-12 medium-12 large-12 ">
                    <div className="contact-title">Customer Support</div>
                    <p className="inquiry-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="small-12 medium-12 large-12">
                      <div className="contact-btn-desc-wrap">
                        <a href="#contact-form" className="button btn-round-red-white orange-border"  refs="btnCustomerSup" onClick={this.onButtonClicked(2)}>Customer Support</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DescPanel;
