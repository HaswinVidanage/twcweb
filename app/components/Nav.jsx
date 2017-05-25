var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var navSearch = this.refs.navSearch.value;
    var encodedLocation = encodeURIComponent(navSearch);

    console.log(encodedLocation);
    if(encodedLocation.length >0){
      this.refs.navSearch.value = "";
      window.location.hash = `#/?location=${encodedLocation}`;
    }

  },
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
      <nav class="light menu">

        <div class="navbar align-middle row">
          <a class="brand small-6 medium-1 large-3 align-middle columns" href="index.html">
            <img alt="prismicio" src="...a3f951e/images/logoHeader.svg"/><span>prismic.io</span>
          </a>


          <ul class="menu-desktop medium-11 large-9 align-right align-middle row">
            <li>
              <div class="menu-group">
                <span>Features</span>
                <div class="sub-items row">


                  <div class="sub-item medium-6 large-4 column">
                    <a href="feature/custom-type-builder.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span class="menu-item ">
                          Custom type builder
                        </span>

                      <p>Model your content in the blink of an eye</p>
                    </a>
                  </div>


                  <div class="sub-item medium-6 large-4 column">
                    <a href="feature/scheduling-and-previews.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F0512e2c7-dea5-4af0-9e92-f83ca41c8536_schedule.svg" alt="" />


                      <span class="menu-item ">
                          Scheduling &amp; previews
                        </span>

                      <p>Manage, schedule and preview your content releases</p>
                    </a>
                  </div>


                  <div class="sub-item medium-6 large-4 column">
                    <a href="feature/full-history-revision.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F20867243-c0c0-4c46-94d8-bd20ceda4618_history.svg" alt="" />


                      <span class="menu-item ">
                          Full revision history
                        </span>

                      <p>Never lose a change thanks to revision history</p>
                    </a>
                  </div>


                  <div class="sub-item medium-6 large-4 column">
                    <a href="feature/localization-and-multilanguage.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F12786898-79c8-4316-98d7-92b22a6bb453_localization.svg" alt="" />


                      <span class="menu-item ">
                          Multi-language
                        </span>

                      <p>Localize your content and succeed globally</p>
                    </a>
                  </div>


                  <div class="sub-item medium-6 large-4 column">
                    <a href="feature/dynamic-layout-content-components.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2Fffdae39b-7aed-4cd4-9b6c-34046faa5406_layout.svg" alt="" />


                      <span class="menu-item ">
                          Dynamic layouts
                        </span>

                      <p>Create dynamic layouts with reusable custom components</p>
                    </a>
                  </div>

                </div>
              </div>
            </li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="quickstart.html">Quickstart</a></li>
            <li><a href="docs.html">Docs</a></li>
            <li class="separator"></li>
            <li><a href="dashboard/index.html">Login</a></li>
            <li><a class="button" href="%23create.html">Test it out</a></li>
          </ul>


          <div class="menu-mobile small-6">
            <i class="icon-menu"></i>
            <div class="menu-mobile-container small-12">
              <i class="icon-close"></i>
              <div class="menu-content">
                <span class="group-label">Features</span>
                <div class="sub-items">
                  <div class="sub-item small-12">
                    <a href="feature/custom-type-builder.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F7df9f9e7-7948-4f26-a33f-eeb4bfec95a6_visual-builder.svg" alt="" />


                      <span class="">
                      Custom type builder
                    </span>

                    </a>
                  </div>
                  <div class="sub-item small-12">
                    <a href="feature/scheduling-and-previews.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F0512e2c7-dea5-4af0-9e92-f83ca41c8536_schedule.svg" alt="" />

                      <span class="">
                        Scheduling &amp; previews
                      </span>

                    </a>
                  </div>


                  <div class="sub-item small-12">
                    <a href="feature/full-history-revision.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F20867243-c0c0-4c46-94d8-bd20ceda4618_history.svg" alt="" />


                      <span class="">
                      Full revision history
                    </span>

                    </a>
                  </div>

                  <div class="sub-item small-12">
                    <a href="feature/localization-and-multilanguage.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2F12786898-79c8-4316-98d7-92b22a6bb453_localization.svg" alt="" />


                      <span class="">
                        Multi-language
                      </span>

                    </a>
                  </div>


                  <div class="sub-item small-12">
                    <a href="feature/dynamic-layout-content-components.html">

                      <img src="https://prismicio.cdn.prismic.io/prismicio%2Fffdae39b-7aed-4cd4-9b6c-34046faa5406_layout.svg" alt="" />
                      <span class="">
                        Dynamic layouts
                      </span>

                    </a>
                  </div>

                </div>


                <div class="item small-12"><a href="pricing.html">Pricing</a></div>


                <div class="item small-12"><a href="quickstart.html">Quickstart</a></div>


                <div class="item small-12"><a href="docs.html">Docs</a></div>

                <span class="separator"></span>


                <div class="item small-12"><a href="dashboard/index.html">Login</a></div>


                <div class="item small-12"><a class="button" href="%23create.html">Test it out</a></div>


              </div>
            </div>
          </div>
        </div>
      </nav>


    );
  }
});

module.exports = Nav;
