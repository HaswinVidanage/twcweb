var React = require('react');
import TitleBar from './common/TitleBar';
import FounderMessage from './about/FounderMessage';

//use of stateless functional components

var About = React.createClass({

  handlePolyClick : function(id) {
    this.setState({clicked: true});
  },

  handleMouseLeave : function() {
    this.setState({clicked: false});
  },

  getInitialState : function(){
    return {
      clicked: false,
      title: 'ABOUT US',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    };
  },
  render:function(){
    var {title, content, clicked} = this.state;



    //const x = <image  style={{overflow: 'visible'}} width={600} height={600} xlinkHref="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png" transform="matrix(0.4463 0 0 0.4463 672.7 114.3)"></image>;

    var renderSVG = function() {
      if(clicked){
        return (<image  style={{overflow: 'visible'}} width={600} height={600} xlinkHref="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png" transform="matrix(0.4463 0 0 0.4463 672.7 114.3)"></image>);
      }
    };


    return(
      <div>
        <TitleBar title={title} content={content}/>
        <div classsName = "small-12 medium-12 large-12">
          <div className="floating-about-text">
          {/* {renderMsg()} */}
          <h2 className="about-title">ONE <span className= "red-span">CARING</span> TEAM</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>

          <div>
                <svg version="1.1" id="Team" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1440 905" style={{enableBackground: 'new 0 0 1440 905'}} xmlSpace="preserve">
                    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st0{fill:none;enable-background:new;}\n\t.st1{fill:#F6F6F6;}\n" }} />
                    <path className="st0" d="M0,0" />
                    <g id="Team_1_">
                      <rect className="st1" width={1440} height={901} />
                      <g id="_x33_">
                        <g>
                          <defs>
                            <path id="Member_07" d="M953.5,529l133.9-133.9L1221.3,529l-133.9,133.9L953.5,529z" />
                          </defs>
                          <clippath id="polygon-7">
                            <use xlinkHref="#Member_07" style={{overflow: 'visible'}} />
                          </clippath>
                          <g transform="matrix(1 0 0 1 -6.103516e-05 0)" style={{clipPath: 'url(#polygon-7)'}}>
                            <image style={{overflow: 'visible'}} width={600} height={600} xlinkHref="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png" transform="matrix(0.4463 0 0 0.4463 953.5 395.1)">
                            </image>
                          </g>
                        </g>
                        <g>
                          <defs>
                            <path id="Member_08" d="M813.5,669l133.9-133.9L1081.3,669L947.4,802.9L813.5,669z" />
                          </defs>
                          <clippath id="polygon-8">
                            <use xlinkHref="#Member_08" style={{overflow: 'visible'}} />
                          </clippath>
                          <g style={{clipPath: 'url(#polygon-8)'}}>
                            <image style={{overflow: 'visible'}} width={600} height={600} xlinkHref="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png" transform="matrix(0.4463 0 0 0.4463 813.5 535.1)">
                            </image>
                          </g>
                        </g>
                        <g>
                          <defs>
                            <path id="Member_05" d="M1094.4,388.2l133.9-133.9l133.9,133.9l-133.9,133.9L1094.4,388.2z" />
                          </defs>
                          <clippath id="polygon-5">
                            <use xlinkHref="#Member_05" style={{overflow: 'visible'}} />
                          </clippath>
                          <g transform="matrix(1 0 0 1 0 -1.525879e-05)" style={{clipPath: 'url(#polygon-5)'}}>
                            <image style={{overflow: 'visible'}} width={600} height={600} xlinkHref="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png" transform="matrix(0.4463 0 0 0.4463 1094.4 254.1)">
                            </image>
                          </g>
                        </g>
                      </g>
                      <g id="_x32_">
                        <g>
                          <defs>
                            <path id="Member_06" d="M672.5,530.1l133.9-133.9l133.9,133.9L806.4,664L672.5,530.1z" />
                          </defs>
                          <clippath id="polygon-6">
                            <use xlinkHref="#Member_06" style={{overflow: 'visible'}} />
                          </clippath>
                          <g style={{clipPath: 'url(#polygon-6)'}}>
                            <image style={{overflow: 'visible'}} width={600} height={600} xlinkHref="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png" transform="matrix(0.4463 0 0 0.4463 672.5 396.2)">
                            </image>
                          </g>
                        </g>
                        <g>
                          <defs>
                            <path id="Member_04" d="M812.5,389.2l133.9-133.9l133.9,133.9L946.4,523.1L812.5,389.2z" />
                          </defs>
                          <clippath id="polygon-4">
                            <use xlinkHref="#Member_04" style={{overflow: 'visible'}} />
                          </clippath>
                          <g transform="matrix(1 0 0 1 0 -1.525879e-05)" style={{clipPath: 'url(#polygon-4)'}}>
                            <image style={{overflow: 'visible'}} width={600} height={600} xlinkHref="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png" transform="matrix(0.4463 0 0 0.4463 812.5 255.3)">
                            </image>
                          </g>
                        </g>
                        <g>
                          <defs>
                            <path id="Member_02" d="M952.5,248.4l133.9-133.9l133.9,133.9l-133.9,133.9L952.5,248.4z" />
                          </defs>
                          <clippath id="polygon-2">
                            <use xlinkHref="#Member_02" style={{overflow: 'visible'}} />
                          </clippath>
                          <g transform="matrix(1 0 0 1 -6.103516e-05 0)" style={{clipPath: 'url(#polygon-2)'}}>
                            <image style={{overflow: 'visible'}} width={600} height={600} xlinkHref="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png" transform="matrix(0.4463 0 0 0.4463 952.5 114.5)">
                            </image>
                          </g>
                        </g>
                      </g>
                      <g id="_x31_">
                        <g>
                          <defs>
                            <path id="Member_03" d="M531.8,389.2l133.9-133.9l133.9,133.9L665.7,523.1L531.8,389.2z" />
                          </defs>
                          <clippath id="polygon-3">
                            <use xlinkHref="#Member_03" style={{overflow: 'visible'}} />
                          </clippath>
                          <g transform="matrix(1 0 0 1 0 -1.525879e-05)" style={{clipPath: 'url(#polygon-3)'}}>
                            <image style={{overflow: 'visible'}} width={600} height={600} xlinkHref="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png" transform="matrix(0.4463 0 0 0.4463 531.8 255.3)">
                            </image>
                          </g>
                        </g>
                        <g>
                          <defs>
                            <path id="Member_01" d="M672.7,248.4l133.9-133.9l133.9,133.9L806.6,382.3L672.7,248.4z" />
                          </defs>
                          <clippath id="polygon-1" >
                            <use xlinkHref="#Member_01" style={{overflow: 'visible'}} />
                          </clippath>
                          <g style={{clipPath: 'url(#polygon-1)'}}>
                            <path id="path-polygon-1"  onClick={() => this.handlePolyClick(1)}   className="about-st2" d="M672.7,248.4l133.9-133.9l133.9,133.9L806.6,382.3L672.7,248.4z" />
                            {renderSVG()}
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
          </div>
        </div>

        <FounderMessage/>
      </div>
    );
  }
});

module.exports = About;


{/* <svg version="1.1" id="Team" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1440 905" style={{enableBackground: 'new 0 0 1440 905'}} xmlSpace="preserve">
    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.about-st0{fill:none;enable-background:new    ;}\n\t.about-st1{fill:#F6F6F6;}\n\t.about-st2{fill:#FFFFFF;}\n\t.about-st2:hover {\n\t\tfill: #ff0404!important;\n\t}\n" }} />
    <path className="about-st0" d="z" />
    <g id="teams">
      <rect className="about-st1" width={1440} height={901} />
      <g id="_1">
        <path id="polygon-8" className="about-st2" d="M813.4,675.6l133.9-133.9l133.9,133.9L947.3,809.5L813.4,675.6z" />
        <path id="polygon-3" className="about-st2" d="M531.8,389.2l133.9-133.9l133.9,133.9L665.7,523.1L531.8,389.2z" />
        <path id="polygon-1"  onClick={() => this.handlePolyClick(1)} onMouseEnter={() => this.handlePolyClick(1)}  onMouseLeave={this.handleMouseLeave}className="about-st2" d="M672.7,248.4l133.9-133.9l133.9,133.9L806.6,382.3L672.7,248.4z" />

      </g>
      <g id="_2">
        <path id="polygon-6" className="about-st2" d="M672.5,530.1l133.9-133.9l133.9,133.9L806.4,664L672.5,530.1z" />
        <path id="polygon-4" className="about-st2" d="M813.4,389.2l133.9-133.9l133.9,133.9L947.3,523.1L813.4,389.2z" />
        <path id="polygon-2" className="about-st2" d="M954.2,248.4l133.9-133.9L1222,248.4l-133.9,133.9L954.2,248.4z" />
      </g>
      <g id="_3">
        <path id="polygon-5" className="about-st2" d="M1096.7,391.1l133.9-133.9l133.9,133.9l-133.9,133.9L1096.7,391.1z" />
        <path id="polygon-7" className="about-st2" d="M954.5,534.3l133.9-133.9l133.9,133.9l-133.9,133.9L954.5,534.3z" />
      </g>
    </g>
  </svg> */}
