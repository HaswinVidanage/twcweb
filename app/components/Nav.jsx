var React = require('react');
var {Link, IndexLink} = require('react-router');
var ServicesContent = require("./services/service-content-en.json");
var Nav = React.createClass({
  close : function () {
    document.getElementById("desktop-menu").classList.remove("open");
    document.getElementById("mobile-menu").classList.remove("open");
    // var d = document.getElementById("body");
    // d.className += " overflow-auto";
  },
  onMobileMenuClicked : function () {
    //alert('Menu Clicked');
  },
  render:function(){
    return (

      <nav className="vertical light menu" id="navbar">
        <div className="navbar align-middle row navbar-custom">
          <a className="brand small-6 medium-1 large-3 align-middle columns" href="index.html">
              <img src="./images/logo.png" className='twc-logo'/>
          </a>


          <ul className="menu-desktop medium-11 large-9 align-right align-middle row" >
            <li><Link to="#">Home</Link></li>
            <li>
              <div className="menu-group" id="desktop-menu">
                <span>Services</span>
                <div className="sub-items row">

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="/services/1" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile1.icon} className ="nav-img" alt="" />
                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile1.name}
                      </span>
                      <p>{ServicesContent.service_commons.tile1.description}</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="/services/2" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile2.icon} alt="" className ="nav-img"/>
                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile2.name}
                        </span>

                      <p>{ServicesContent.service_commons.tile2.description}</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="/services/3" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile3.icon} alt="" className ="nav-img" />


                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile3.name}
                        </span>

                      <p>{ServicesContent.service_commons.tile3.description}</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="/services/4" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile4.icon} alt="" className ="nav-img" />


                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile4.name}
                        </span>

                      <p>{ServicesContent.service_commons.tile4.description}</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="/services/5" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile5.icon} alt="" className ="nav-img" />


                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile5.name}
                        </span>

                      <p>{ServicesContent.service_commons.tile5.description}</p>
                    </Link>
                  </div>

                  <div className="sub-item medium-6 large-4 column">
                  <Link to="/services/6" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile6.icon} alt="" className ="nav-img" />


                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile6.name}
                        </span>

                      <p>{ServicesContent.service_commons.tile6.description}</p>
                    </Link>
                  </div>

                </div>
              </div>
            </li>
            {/* <li><Link to="/Saless" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Sales Suit</Link></li> */}
            <li><Link to="/portfolio" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Portfolio</Link></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
            <li className="separator"></li>
            <li><Link to="/blog" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Blog</Link></li>
            <li><Link to="/#" className="button navButton" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Log in</Link></li>

          </ul>


          <div className= 'menu-mobile small-6' id="mobile-menu" >
            <i className="icon-menu" onClick={() => {this.onMobileMenuClicked()}}>
              <img src = "http://flatironsmineralclub.org/wp-content/themes/fmc/img/menu_icon.png" className="navbar-icon"/>
            </i>
            <div className="menu-mobile-container small-12">
              <i className="icon-close" onClick={() => {this.onMobileMenuClicked()}}>
                <img src = "https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/close-512.png" className="navbar-close"/>
              </i>
              <div className="menu-content">
                <div className="item small-12"><li><Link onClick= {() => {this.close()}} to="#">Home</Link></li></div>

                <span className="group-label">Services</span>
                <div className="sub-items">
                  <div className="sub-item small-12">

                    <Link to="/services/1" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile1.icon} alt="" />
                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile1.name}
                      </span>

                    </Link>
                  </div>
                  <div className="sub-item small-12">

                    <Link to="/services/2" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile2.icon} alt="" />
                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile2.name}
                      </span>

                    </Link>
                  </div>
                  <div className="sub-item small-12">

                    <Link to="/services/3" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile3.icon} alt="" />
                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile3.name}
                      </span>

                    </Link>
                  </div>
                  <div className="sub-item small-12">
                    <Link to="/services/4" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile4.icon} alt="" />
                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile4.name}
                      </span>

                    </Link>
                  </div>
                  <div className="sub-item small-12">
                    <Link to="/services/5" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile5.icon} alt="" />
                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile5.name}
                      </span>

                    </Link>
                  </div>
                  <div className="sub-item small-12">
                    <Link to="/services/6" onClick= {() => {this.close()}} activeClassName="active" activeStyle={{fontWeight:'bold'}}>
                      <img src={ServicesContent.service_commons.tile6.icon} alt="" />
                      <span className="menu-item ">
                          {ServicesContent.service_commons.tile6.name}
                      </span>

                    </Link>
                  </div>

                </div>
                <span className="separator"></span>
                {/* <div className="item small-12"><Link onClick= {() => {this.close()}} to="/Saless" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Sales Suit</Link></div> */}
                <div className="item small-12"><li><Link onClick= {() => {this.close()}} to="/portfolio" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Portfolio</Link></li></div>
                <div className="item small-12"><li><Link onClick= {() => {this.close()}}  to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li></div>
                <span className="separator"></span>
                <div className="item small-12"><li><Link onClick= {() => {this.close()}} to="/blog" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Blog</Link></li></div>
                <div className="item small-12"><li><Link onClick= {() => {this.close()}} to="/contact" className="button navButton" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Contact Us</Link></li></div>

              </div>
            </div>
          </div>
        </div>
      </nav>




    );
  }
});

module.exports = Nav;
