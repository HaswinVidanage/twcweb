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
                    <img className="about-images center" src ="./images/contact/request-demo.svg"/>
                  </div>
                  <div className="small-12 medium-12 large-12 ">
                    <div className="contact-title">Request A Demo</div>
                    <p className="inquiry-desc">We provide demonstration online to our foreign clients and hands on demonstration for our local clients. </p>

                    <div className="small-12 medium-12 large-12">
                      <div className="contact-btn-desc-wrap">
                        <a href="#contact-form" id="back" className="button btn-round-red-white orange-border" refs="btnDemo" onClick={this.onButtonClicked(0)}>Request a Demo</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="small-12 medium-4 large-4 columns">
                  <div className="small-12 medium-12 large-12 ">
                    <img className="about-images" src ="./images/contact/sales-enquiry.svg"/>
                  </div>
                  <div className="small-12 medium-12 large-12 ">
                    <div className="contact-title">Sales Inquiry</div>
                    <p className="inquiry-desc">Feel free to shoot an inquiry of any sorts of IT inquiry and we will get in touch with you. </p>
                    <div className="small-12 medium-12 large-12">
                      <div className="contact-btn-desc-wrap">
                        <a href="#contact-form" className="button btn-round-red-white orange-border"  refs="btnSales" onClick={this.onButtonClicked(1)}>&nbsp;&nbsp;&nbsp;Sales Inquiry&nbsp;&nbsp;&nbsp;</a>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="small-12 medium-4 large-4 columns">
                  <div className="small-12 medium-12 large-12 ">
                    <img className="about-images" src ="./images/contact/customer-support.svg"/>
                  </div>
                  <div className="small-12 medium-12 large-12 ">
                    <div className="contact-title">Customer Support</div>
                    <p className="inquiry-desc">Customer support and project related updates will be given from this portal.</p>
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
