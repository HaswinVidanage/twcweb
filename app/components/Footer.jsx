var React = require('react');

var {FaFacebook, FaTwitter, FaInstagram, FaGooglePlus, FaLinkedin, FaYoutube} = require('react-icons/lib/fa');

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
              <div>
                <p className="footerWords">
                  TWC Innovations was founded with a rebellious spirit and a lofty objective to offer state of the art soft technologies at a revolutionary price, while leading the way for socially conscious business.
                </p>
              </div>
            </div>
          </div>
          <div className="small-12 medium-2 columns hide-for-small-only">
            <div className="vertical-line" >
            </div>
            <div className="footer-menu-wrap">
              <div className="">
                <strong>OUR COMPANY</strong>
              </div>

              <div className="footer-menu-ul-wrap">
                <div className="small-12 medium-6 columns footer-link-wrap">
                  <ul className="footer-ul">
                    <li><Link to="/#" className="footer-link-text">Home</Link></li>
                    <li><Link to="/about" className="footer-link-text" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
                    <li><Link to="/contact" className="footer-link-text" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Contact Us</Link></li>
                    <li><Link to="/careers" className="footer-link-text" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Careers</Link></li>
                  </ul>
                </div>

                <div className="small-12 medium-6 columns" style={{display:'none'}}>
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
              <div className="small-12 medium-12 columns footer-contact-div">
                <strong>CONTACT US</strong>
                <div className="footer-contact-text-wrapper footer-contact-div">
                  <ul className="footer-ul">
                    <li><p className='email-medium-wrap'>sales@twcinnovations.com</p></li>
                    <li><p>25 Vijitha Road <br/>Nadimala Dehiwala(10350) <br/>Sri Lanka</p></li>
                    <li><p>(+94) 11 2731912</p></li>
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
                <div className="footer-contact-text-wrapper footer-contact-div hide-for-small-only">
                  <ul className="footer-ul">
                    <li><a href="https://www.facebook.com/twcinnovation/" target="_blank" className="footer-social-text"><span><p><FaFacebook/>&nbsp;Facebook</p></span></a></li>
                    <li><a href="https://twitter.com/twcinnovations/" target="_blank" className="footer-social-text"><span><p><FaTwitter/>&nbsp;Twitter</p></span></a></li>
                    <li><a href="https://www.instagram.com/twcinnovations/" target="_blank" className="footer-social-text"><span><p><FaInstagram/>&nbsp;Instagram</p></span></a></li>
                    <li><a href="https://www.linkedin.com/company/the-web-company-sri-lanka/" target="_blank" className="footer-social-text"><span><p><FaLinkedin/>&nbsp;Linkedin</p></span></a></li>
                    <li><a href="https://plus.google.com/103196226565054953717/" target="_blank" className="footer-social-text"><span><p><FaGooglePlus/>&nbsp;GooglePlus</p></span></a></li>
                    <li><a href="https://www.youtube.com/channel/UCPUukkHtQy2dMzpt-YJOtTg" target="_blank" className="footer-social-text"><span><p><FaYoutube/>&nbsp;Youtube</p></span></a></li>
                  </ul>
                </div>
                <div className="row footer-contact-text-wrapper footer-contact-div show-for-small-only small-12">
                    <ul className="footer-ul small-6">
                      <li><a href="https://www.facebook.com/twcinnovation/" target="_blank" className="footer-social-text"><span><p><FaFacebook/>&nbsp;Facebook</p></span></a></li>
                      <li><a href="https://twitter.com/twcinnovations/" target="_blank" className="footer-social-text"><span><p><FaTwitter/>&nbsp;Twitter</p></span></a></li>
                      <li><a href="https://www.instagram.com/twcinnovations/" target="_blank" className="footer-social-text"><span><p><FaInstagram/>&nbsp;Instagram</p></span></a></li>
                    </ul>
                    <ul className="footer-ul small-6">
                      <li><a href="https://www.linkedin.com/company/the-web-company-sri-lanka/" target="_blank" className="footer-social-text"><span><p><FaLinkedin/>&nbsp;Linkedin</p></span></a></li>
                      <li><a href="https://plus.google.com/103196226565054953717/" target="_blank" className="footer-social-text"><span><p><FaGooglePlus/>&nbsp;GooglePlus</p></span></a></li>
                      <li><a href="https://www.youtube.com/channel/UCPUukkHtQy2dMzpt-YJOtTg" target="_blank" className="footer-social-text"><span><p><FaYoutube/>&nbsp;Youtube</p></span></a></li>
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
