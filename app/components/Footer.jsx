var React = require('react');

var {FaFacebook, FaTwitter, FaInstagram} = require('react-icons/lib/fa');

var {Link, IndexLink} = require('react-router');

var Footer = React.createClass({

  render:function(){
    return (
      <footer className="footer" id="footer">
        <div className="footer-row">

          <div className="small-12 medium-4 columns">
            <div className="footer-row-col-1">
              <div className="footer-logo-wrap">
                <object id="obj-browser" data="./images/Home/footer-logo.svg" type="image/svg+xml">
                  <img src="./images/Home/footer-logo.png" />
                </object>
              </div>
              <div className="footer-logo-text-wrap" >
                <p className="footer-logo-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div className="small-12  medium-3 columns">
            <div className="vertical-line" >
            </div>
            <div className="footer-menu-wrap">
              <div className="">
                <strong>OUR COMPANY</strong>
              </div>

              <div className="footer-menu-ul-wrap">
                <div className="small-12 medium-6 columns">
                  <ul className="footer-ul">
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Sales Suit</li>
                    <li>Services</li>
                  </ul>
                </div>

                <div className="small-12 medium-6 columns">
                  <ul className="footer-ul">
                    <li>FAQ</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>CSR</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="small-12 medium-3 columns">
            <div className="vertical-line" />
            <div className="footer-contact-wrapper">
              <div className="small-12 medium-12 columns">
                <strong>CONTACT US</strong>
                <div className="footer-contact-text-wrapper">
                  <ul className="footer-ul">
                    <li><p>info@twcinnovations.com</p></li>
                    <li><p>25 Vijitha Road <br/>Nadimala Dehiwala(10230) <br/>Sri Lanka</p></li>
                    <li><p>(+94) 11 2345678</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="small-12  medium-2 columns">
            <div className="vertical-line" />
            <div className="footer-social-wrapper">
              <div className="small-12 medium-12 columns">
                <strong>FOLLOW US</strong>
                <div className="footer-contact-text-wrapper">
                  <ul className="footer-ul">
                    <li><a href="https://www.facebook.com/twcinnovation/" target="_blank" className="footer-social-text"><span><p><FaFacebook/>&nbsp;Facebook</p></span></a></li>
                    <li><a href="https://twitter.com/twcinnovations/" target="_blank" className="footer-social-text"><span><p><FaTwitter/>&nbsp;Twitter</p></span></a></li>
                    <li><a href="https://www.instagram.com/twcinnovations/" target="_blank" className="footer-social-text"><span><p><FaInstagram/>&nbsp;Instagram</p></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
