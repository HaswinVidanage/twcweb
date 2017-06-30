var React = require('react');
var Isvg = require('react-inlinesvg');
import MySVG from './svgComp.jsx';
var {FaLaptop, FaTablet, FaMobile} = require('react-icons/lib/fa');

var SingleProject = React.createClass({
  getInitialState: function () {
    return {
      color:'green',
      deviceVisible: 'lap'
    };
  },

  handleLapClick : function(){
     this.setState({deviceVisible: 'lap'});
  },
  handleTabClick : function(){
    this.setState({deviceVisible: 'tab'});
  },
  handleMobClick : function(){
    this.setState({deviceVisible: 'mob'});
  },
  render : function(){
    var {_id, title, description, url, thumbnailDesktop, thumbnailTablet, thumbnailMobile} = this.props;
    var {deviceVisible} = this.state;

    return (
      <div className="single-project-wrap">
        <div className="project-card">
          <div className="small-12 medium-12 large-12 columns">
            <div className="small-6 medium-6 large-6 columns project-content">
              <h1 className="project-title">{title}</h1>
              <p className="project-desc">{description}</p>
            </div>
            <div className="small-6 medium-6 large-6 columns">
              <div className="project-svg-wrapper">
                <div>
                    {(function() {
                      switch(deviceVisible) {
                          case 'lap':

                          var  linkAs = (key, attrs) => (
                            (this.__cb4r3fs || (this.__cb4r3fs = new Map())).get(key) || this.__cb4r3fs.set(key, node => (
                              this.refs[key] !== node && (this.refs = Object.assign({}, this.refs, { [key]: node })),
                              node && Object.keys(attrs).forEach(attr => node.setAttributeNS(null, attr, attrs[attr]))
                            )).get(key)
                          );

                          return (
                                    <svg className="project-desktop-thumb" version={1.0} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" style={{enableBackground: 'new 0 0 1000 1000'}} xmlSpace="preserve">
                                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st0{fill:#414042;}\n\t\n\t.st2{fill:#7C828B;}\n\t.st3{fill:#808285;}\n\t.st4{fill:#A7A9AC;}\n\t.st5{fill:#C5CED6;}\n" }} />
                                      <g>
                                        <path className="st0" d="M820.2,258.8H181.4c-8.9,0-16.1,7.2-16.1,16.1v425.7h671V274.9C836.3,266.1,829,258.8,820.2,258.8z" />
                                        <rect x="195.2" y="286.5" className="st1" width="611.9" height="393.2" id="rectId" />
                                        <image x="195.2" y="286.5" xlinkHref={thumbnailDesktop.url} width="611.9" height="393.2" />
                                        <polygon className="st2" points="908.2,740.3 92.3,740.3 52,725.6 948.4,725.6 	" />
                                        <path className="st3" d="M503,275.4c0,1.6-1.3,2.8-2.9,2.8c-1.6,0-2.8-1.3-2.8-2.8c0-1.6,1.3-2.9,2.8-2.9
                              		C501.8,272.6,503,273.8,503,275.4z" />
                                        <rect x="427.3" y="700.5" className="st4" width="145.3" height="14.8" />
                                        <path className="st5" d="M561.1,700.5v5.4c0,3.7-3,6.7-6.7,6.7H445.7c-3.7,0-6.7-3-6.7-6.7v-5.4H52v25h896.4v-25H561.1z" />
                                      </g>
                                    </svg>
                                  );
                          case 'tab':
                          return (
                                  <svg className="project-tablet-thumb" version={1.0} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" style={{enableBackground: 'new 0 0 1000 1000'}} xmlSpace="preserve">
                                    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st6{fill:#414042;}\n\t.st7{fill:#E6E7E8;}\n\t.st8{fill:#58595B;}\n\t.st9{fill:#808285;}\n" }} />
                                    <g>
                                      <path className="st6" d="M837.4,875.1c0,20.7-16.9,37.6-37.6,37.6H223.6c-20.6,0-37.6-16.9-37.6-37.6V103.7c0-20.7,16.9-37.6,37.6-37.6
                                  h576.2c20.7,0,37.6,16.9,37.6,37.6V875.1z" />
                                      <rect x="249.2" y="138.1" className="st7" width="525.1" height="702.5" />
                                      <image x="249.2" y="138.1" xlinkHref={thumbnailTablet.url} width="525.1" height="702.5" />
                                      <path className="st8" d="M520.1,104.7c0,4.6-3.8,8.3-8.4,8.3c-4.6,0-8.4-3.7-8.4-8.3c0-4.6,3.7-8.3,8.4-8.3
                                  C516.3,96.4,520.1,100.1,520.1,104.7z" />
                                      <path className="st9" d="M526.4,874.1c0,8.1-6.5,14.6-14.6,14.6c-8.1,0-14.6-6.6-14.6-14.6c0-8.1,6.5-14.6,14.6-14.6
                                  C519.8,859.5,526.4,866,526.4,874.1z" />
                                    </g>
                                  </svg>
                                  );
                          case 'mob':
                          return (
                                  <svg className="project-mobile-thumb" version={1.0} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" style={{enableBackground: 'new 0 0 1000 1000'}} xmlSpace="preserve">
                                    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st10{fill:#414042;}\n\t.st11{fill:#E6E7E8;}\n\t.st12{fill:#808285;}\n\t.st13{fill:#58595B;}\n" }} />
                                    <g>
                                      <g>
                                        <path className="st10" d="M713.4,870.3c0,36-29.5,65.5-65.5,65.5H358.3c-36,0-65.5-29.5-65.5-65.5V115.8c0-36,29.4-65.5,65.5-65.5H648
                            			c36,0,65.5,29.5,65.5,65.5L713.4,870.3L713.4,870.3z" />
                                      </g>
                                      <rect x="313.0" y="171.2" className="st11" width="382.0" height="647.4" />
                                      <image x="313.0" y="171.2" xlinkHref={thumbnailMobile.url} width="382.0" height="647.4" />
                                      <path className="st12" d="M532.6,870.9c0,16.3-13.2,29.6-29.5,29.6s-29.5-13.2-29.5-29.6c0-16.3,13.2-29.5,29.5-29.5
                            		C519.4,841.4,532.6,854.6,532.6,870.9z" />
                                      <path className="st13" d="M534.8,129.6c0,4.8-4,8.8-8.9,8.8h-55.1c-4.9,0-8.9-4-8.9-8.8l0,0c0-4.9,4-8.8,8.9-8.8h55.1
                            		C530.8,120.8,534.8,124.8,534.8,129.6L534.8,129.6z" />
                                    </g>
                                  </svg>
                                );
                          default:
                              return null;
                      }
                  })()}

                </div>
              </div>
            </div>
          </div>

          <div className="small-12 medium-12 large-12 columns">
            <div className="small-6 medium-6 large-6 columns">
                <a id="see-live-btn" href={url} target="_blank" className="hollow button">SEE IT LIVE</a>
            </div>
            <div className="small-6 medium-6 large-6 columns">
              <div className="device-btn-row">
                <FaLaptop  size={60} color= { (deviceVisible == 'lap')? "#fff" : "#515156"} className="btn-lap" onClick={this.handleLapClick}/>
                <FaTablet  size={60} color= { (deviceVisible == 'tab')? "#fff" : "#515156"} className="btn-tab" onClick={this.handleTabClick}/>
                <FaMobile  size={60} color= { (deviceVisible == 'mob')? "#fff" : "#515156"} className="btn-mob" onClick={this.handleMobClick}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
});


module.exports = SingleProject;
