var React = require('react');

const defImg    = 'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png';
const north  = 'http://res.cloudinary.com/haswind/image/upload/v1499575398/1-north_adhoox.png';
const north_east = 'http://res.cloudinary.com/haswind/image/upload/v1499575399/2-north-east_hizwcg.png';
const east = 'http://res.cloudinary.com/haswind/image/upload/v1499575396/3-east_gkdbty.png';
const south_east = 'http://res.cloudinary.com/haswind/image/upload/v1499575399/4-south-east_q6tz1h.png';
const south = 'http://res.cloudinary.com/haswind/image/upload/v1499575398/5-south_gexaam.png';
const south_west = 'http://res.cloudinary.com/haswind/image/upload/v1499575397/6-south-west_hbxhgs.png';
const west = 'http://res.cloudinary.com/haswind/image/upload/v1499575400/7-west_hkybna.png';
const north_west = 'http://res.cloudinary.com/haswind/image/upload/v1499575398/8-north-west_xnx3jo.png';


var TeamGrid = React.createClass({
  handlePolyOver : function(id) {

    switch (id) {
      case 1:
        this.setState({
          fname: 'GUY',
          lname: 'ONE',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          url_1:defImg,
          url_2:west,
          url_3:north_east,
          url_4:north_west,
          url_5:north_west,
          url_6:north,
          url_7:north_west,
          url_8:north
        });
        break;
      case 2:
        this.setState({
          fname: 'GUY',
          lname: 'TWO',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          url_1:east,
          url_2:defImg,
          url_3:north_east,
          url_4:north_east,
          url_5:north_west,
          url_6:north_east,
          url_7:north,
          url_8:north
        });
        break;
      case 3:
        this.setState({
          fname: 'GUY',
          lname: 'THREE',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          url_1:south_west,
          url_2:south_west,
          url_3:defImg,
          url_4:west,
          url_5:west,
          url_6:north_west,
          url_7:north_west,
          url_8:north_west
        });
        break;
      case 4:
        this.setState({
          fname: 'GUY',
          lname: 'FOUR',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          url_1:south_east,
          url_2:south_west,
          url_3:east,
          url_4:defImg,
          url_5:west,
          url_6:north_east,
          url_7:north_west,
          url_8:north
        });
        break;
      case 5:
        this.setState({
          fname: 'GUY',
          lname: 'FIVE',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          url_1:south_east,
          url_2:south_east,
          url_3:east,
          url_4:east,
          url_5:defImg,
          url_6:north_east,
          url_7:north_east,
          url_8:north_east
        });
        break;
      case 6:
        this.setState({
          fname: 'GUY',
          lname: 'SIX',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          url_1:south,
          url_2:south_west,
          url_3:south_east,
          url_4:south_west,
          url_5:south_west,
          url_6:defImg,
          url_7:west,
          url_8:north_west
        });
        break;
      case 7:
        this.setState({
          fname: 'GUY',
          lname: 'SEVEN',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          url_1:south_east,
          url_2:south,
          url_3:south_east,
          url_4:south_east,
          url_5:south_west,
          url_6:east,
          url_7:defImg,
          url_8:north_east
        });
        break;
      case 8:
        this.setState({
          fname: 'HASWIN',
          lname: 'VIDANAGE',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          url_1:south,
          url_2:south,
          url_3:south_east,
          url_4:south,
          url_5:south_west,
          url_6:south_east,
          url_7:south_west,
          url_8:defImg
        });
        break;
    }

  },

  handleResetGrid : function() {
    console.log('handleResetGrid');
    this.setState({
      fname: 'ONE CARING',
      lname: 'TEAM',
      url_1:'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_2:'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_3:'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_4:'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_5:'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_6:'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_7:'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_8:'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png'
    });
  },
  getInitialState : function(){
    return {

      fname: 'ONE CARING',
      lname: 'TEAM',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url_1: 'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_2: 'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_3: 'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_4: 'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_5: 'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_6: 'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_7: 'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png',
      url_8: 'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png'


    };
  },
  render:function(){
    var { fname, lname, desc, url_1,url_2,url_3,url_4,url_5,url_6,url_7,url_8} = this.state;
    return (
      <div classsName = "small-12 medium-12 large-12 ">
        <div className="floating-about-text hide-for-small-only">
          <h2 className="about-title">{fname}&nbsp;<span className= "red-span">{lname}</span> </h2>
          <p>{desc}</p>
        </div>
        <div className="floating-about-text-mob show-for-small-only">
          <h2 className="about-title">ONE CARING&nbsp;<span className= "red-span">TEAM</span> </h2>
        </div>
        <div >
              <svg version="1.1" id="Team" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1440 905" style={{enableBackground: 'new 0 0 1440 905'}} xmlSpace="preserve">
                  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t.st0{fill:none;enable-background:new;}\n\t.st1{fill:#F6F6F6;}\n" }} />
                  <path className="st0" d="M0,0" />
                  <g id="Team_1_">
                    <rect className="st1" width={1440} height={901} onMouseEnter={() => this.handleResetGrid()}  />
                    <g id="_x33_">
                      <g>
                        <defs>
                          <path id="Member_07" d="M953.5,529l133.9-133.9L1221.3,529l-133.9,133.9L953.5,529z" />
                        </defs>
                        <clippath id="polygon-7">
                          <use xlinkHref="#Member_07" style={{overflow: 'visible'}} />
                        </clippath>
                        <g transform="matrix(1 0 0 1 -6.103516e-05 0)" style={{clipPath: 'url(#polygon-7)'}}>
                          <image onMouseEnter={() => this.handlePolyOver(7)} style={{overflow: 'visible'}} width={600} height={600}
                            xlinkHref={url_7} transform="matrix(0.4463 0 0 0.4463 953.5 395.1)">
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
                          <image onMouseEnter={() => this.handlePolyOver(8)} style={{overflow: 'visible'}} width={600} height={600}
                            xlinkHref={url_8} transform="matrix(0.4463 0 0 0.4463 813.5 535.1)">
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
                          <image onMouseEnter={() => this.handlePolyOver(5)} style={{overflow: 'visible'}} width={600} height={600}
                            xlinkHref={url_5} transform="matrix(0.4463 0 0 0.4463 1094.4 254.1)">
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
                          <image onMouseEnter={() => this.handlePolyOver(6)} style={{overflow: 'visible'}} width={600} height={600}
                            xlinkHref={url_6} transform="matrix(0.4463 0 0 0.4463 672.5 396.2)">
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
                          <image onMouseEnter={() => this.handlePolyOver(4)} style={{overflow: 'visible'}} width={600} height={600}
                            xlinkHref={url_4} transform="matrix(0.4463 0 0 0.4463 812.5 255.3)">
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
                          <image onMouseEnter={() => this.handlePolyOver(2)} style={{overflow: 'visible'}} width={600} height={600}
                            xlinkHref={url_2} transform="matrix(0.4463 0 0 0.4463 952.5 114.5)">
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
                          <image onMouseEnter={() => this.handlePolyOver(3)} style={{overflow: 'visible'}} width={600} height={600}
                            xlinkHref={url_3} transform="matrix(0.4463 0 0 0.4463 531.8 255.3)">
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
                          <image onMouseEnter={() => this.handlePolyOver(1)} style={{overflow: 'visible'}} width={600} height={600}
                            xlinkHref={url_1} transform="matrix(0.4463 0 0 0.4463 672.7 114.3)"></image>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
        </div>
      </div>
    );
  }
});

module.exports = TeamGrid;
