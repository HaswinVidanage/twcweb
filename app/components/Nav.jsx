var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render:function(){
    return (
      // <div className="top-bar">
      //   <div className="top-bar-left">
      //     <ul className="menu">
      //       <li className="menu-text">React On Weather</li>
      //       <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink></li>
      //       <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
      //       <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
      //     </ul>
      //   </div>
      //
      //   <div className="top-bar-right">
      //     <form onSubmit={this.onSearch}>
      //       <ul className="menu">
      //          <li><input type="search" placeholder="Search weather by city" ref="navSearch"/></li>
      //          <li><input type="submit" className="button" value="Get Weather"/></li>
      //       </ul>
      //     </form>
      //   </div>
      //
      // </div>

      <nav className="vertical light menu">
        <div className="navbar align-middle row">
          <a className="brand small-6 medium-1 large-3 align-middle columns" href="index.html">
            <img alt="twcinnovations" src="./images/logo123.png"/>
          </a>


          <ul className="menu-desktop medium-11 large-9 align-right align-middle row">
            <li>
              <div className="menu-group" >
                <span>Features</span>
                <div className="sub-items row">


                  <div className="sub-item medium-6 large-4 column">
                    <a href="feature/custom-type-builder.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="menu-item ">
                          Custom type builder
                        </span>

                      <p>Model your content in the blink of an eye</p>
                    </a>
                  </div>


                  <div className="sub-item medium-6 large-4 column">
                    <a href="feature/scheduling-and-previews.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F0512e2c7-dea5-4af0-9e92-f83ca41c8536_schedule.svg" alt="" />


                      <span className="menu-item ">
                          Scheduling &amp; previews
                        </span>

                      <p>Manage, schedule and preview your content releases</p>
                    </a>
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
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
            <li><Link to="/portfolio" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Portfolio</Link></li>
            <li><a href="docs.html">Docs</a></li>
            <li className="separator"></li>
            <li><a href="dashboard/index.html">Login</a></li>
            <li><a className="button" href="%23create.html">Test it out</a></li>
          </ul>


          <div className="menu-mobile small-6">
            <i className="icon-menu"></i>
            <div className="menu-mobile-container small-12">
              <i className="icon-close"></i>
              <div className="menu-content">
                <span className="group-label">Features</span>
                <div className="sub-items">
                  <div className="sub-item small-12">
                    <a href="feature/custom-type-builder.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span className="">
                      Custom type builder
                    </span>

                    </a>
                  </div>
                  <div className="sub-item small-12">
                    <a href="feature/scheduling-and-previews.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F0512e2c7-dea5-4af0-9e92-f83ca41c8536_schedule.svg" alt="" />

                      <span className="">
                        Scheduling &amp; previews
                      </span>

                    </a>
                  </div>


                  <div className="sub-item small-12">
                    <a href="feature/full-history-revision.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F20867243-c0c0-4c46-94d8-bd20ceda4618_history.svg" alt="" />


                      <span className="">
                      Full revision history
                    </span>

                    </a>
                  </div>

                  <div className="sub-item small-12">
                    <a href="feature/localization-and-multilanguage.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F12786898-79c8-4316-98d7-92b22a6bb453_localization.svg" alt="" />


                      <span className="">
                        Multi-language
                      </span>

                    </a>
                  </div>


                  <div className="sub-item small-12">
                    <a href="feature/dynamic-layout-content-components.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2Fffdae39b-7aed-4cd4-9b6c-34046faa5406_layout.svg" alt="" />
                      <span className="">
                        Dynamic layouts
                      </span>

                    </a>
                  </div>

                </div>


                <div className="item small-12"><a href="pricing.html">Pricing</a></div>


                <div className="item small-12"><a href="quickstart.html">Quickstart</a></div>


                <div className="item small-12"><a href="docs.html">Docs</a></div>

                <span className="separator"></span>


                <div className="item small-12"><a href="dashboard/index.html">Login</a></div>


                <div className="item small-12"><a className="button" href="%23create.html">Test it out</a></div>


              </div>
            </div>
          </div>
        </div>
      </nav>




    );
  }
});

module.exports = Nav;
