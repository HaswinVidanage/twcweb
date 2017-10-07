var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render:function(){
    return (

      <nav className="vertical light menu" id="navbar">
        <div className="navbar align-middle row navbar-custom">
          <a className="brand small-6 medium-1 large-3 align-middle columns" href="index.html">
              <img src="./images/logo.png" className='twc-logo'/>
          </a>


          <ul className="menu-desktop medium-11 large-9 align-right align-middle row">
            <li><Link to="#">Home</Link></li>
            <li>
              <div className="menu-group" >
                <span>Services</span>
                <div className="sub-items row">

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="#" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="menu-item ">
                          TWC Industrial Solutions
                        </span>

                      <p>Coming Soon. This page is under development.</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="#" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="menu-item ">
                          TWC Help Desk
                        </span>

                      <p>Coming Soon. This page is under development.</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="#" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="menu-item ">
                          Website Development
                        </span>

                      <p>Coming Soon. This page is under development.</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="#" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="menu-item ">
                          Mobile Applications
                        </span>

                      <p>Coming Soon. This page is under development.</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="#" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="menu-item ">
                          Web Applications
                        </span>

                      <p>Coming Soon. This page is under development.</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="#" activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="menu-item ">
                          Digital Media Marketing
                        </span>

                      <p>Coming Soon. This page is under development.</p>
                    </Link>
                  </div>

                </div>
              </div>
            </li>
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
