var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render:function(){
    return (

      <nav className="vertical light menu" id="navbar">
        <div className="navbar align-middle row navbar-custom">
          <a className="brand small-6 medium-1 large-3 align-middle columns" href="index.html">
            <object data="./images/logo.svg" type="image/svg+xml">
              <img src="./images/logo.png" />
            </object>
          </a>


          <ul className="menu-desktop medium-11 large-9 align-right align-middle row">
            <li><Link to="#">Home</Link></li>
            <li>
              <div className="menu-group" >
                <span>Services</span>
                <div className="sub-items row">


                  <div className="sub-item medium-6 large-4 column">
                  <Link to="/websites" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="menu-item ">
                          Web Design & Development
                        </span>

                      <p>Join us to deliver an unique web presence to your clients</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                    <Link to="/mobileapps" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F0512e2c7-dea5-4af0-9e92-f83ca41c8536_schedule.svg" alt="" />


                      <span className="menu-item ">
                          Mobile Application Development
                        </span>

                      <p>Join us to deliver an unique mobile presence to your clients</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                    <a href="feature/full-history-revision.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F20867243-c0c0-4c46-94d8-bd20ceda4618_history.svg" alt="" />


                      <span className="menu-item ">
                          Full revision history
                        </span>

                      <p>Never lose a change thanks to revision history</p>
                    </a>
                  </div>


                  <div className="sub-item medium-6 large-4 column">
                    <a href="feature/localization-and-multilanguage.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F12786898-79c8-4316-98d7-92b22a6bb453_localization.svg" alt="" />


                      <span className="menu-item ">
                          Multi-language
                        </span>

                      <p>Localize your content and succeed globally</p>
                    </a>
                  </div>


                  <div className="sub-item medium-6 large-4 column">
                    <a href="feature/dynamic-layout-content-components.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2Fffdae39b-7aed-4cd4-9b6c-34046faa5406_layout.svg" alt="" />


                      <span className="menu-item ">
                          Dynamic layouts
                        </span>

                      <p>Create dynamic layouts with reusable custom components</p>
                    </a>
                  </div>

                </div>
              </div>
            </li>
            <li><Link to="/Saless" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Sales Suit</Link></li>
            <li><Link to="/portfolio" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Portfolio</Link></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
            <li className="separator"></li>
            <li><Link to="/blog" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Blog</Link></li>
            <li><Link to="/contact" className="button navButton" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Contact Us</Link></li>

          </ul>


          <div className="menu-mobile small-6">
            <i className="icon-menu">
              <img src = "http://flatironsmineralclub.org/wp-content/themes/fmc/img/menu_icon.png" className="navbar-icon"/>
            </i>
            <div className="menu-mobile-container small-12">
              <i className="icon-close">
                <img src = "https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/close-512.png" className="navbar-close"/>
              </i>
              <div className="menu-content">
                <div className="item small-12"><li><Link to="#">Home</Link></li></div>

                <span className="group-label">Services</span>
                <div className="sub-items">
                  <div className="sub-item small-12">

                    <Link to="/websites" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="">
                      Web Development
                    </span>

                    </Link>
                  </div>
                  <div className="sub-item small-12">

                    <Link to="/mobileapps" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="">
                      Mobile App Development
                    </span>

                    </Link>
                  </div>


                  <div className="sub-item small-12">

                    <Link to="/websites" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="">
                      Web Development
                    </span>

                    </Link>
                  </div>

                  <div className="sub-item small-12">

                    <Link to="/websites" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="">
                      Web Development
                    </span>

                    </Link>
                  </div>


                  <div className="sub-item small-12">

                    <Link to="/websites" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="">
                      Web Development
                    </span>

                    </Link>
                  </div>

                  <div className="sub-item small-12">

                    <Link to="/websites" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="">
                      Web Development
                    </span>

                    </Link>
                  </div>

                </div>
                <span className="separator"></span>
                <div className="item small-12"><Link to="/Saless" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Sales Suit</Link></div>
                <div className="item small-12"><li><Link to="/portfolio" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Portfolio</Link></li></div>
                <div className="item small-12"><li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li></div>
                <span className="separator"></span>
                <div className="item small-12"><li><Link to="/blog" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Blog</Link></li></div>
                <div className="item small-12"><li><Link to="/contact" className="button navButton" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Contact Us</Link></li></div>

              </div>
            </div>
          </div>
        </div>
      </nav>




    );
  }
});

module.exports = Nav;
