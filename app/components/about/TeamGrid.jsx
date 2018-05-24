var React = require('react');
var Loadable = require('react-loading-overlay');
var ImageLoader = require('ImageLoader');

const spinner = '/images/Spinner.gif';
const defImg    = 'http://res.cloudinary.com/haswind/image/upload/v1499575396/0-default_aznpyk.png';
const north  = 'http://res.cloudinary.com/haswind/image/upload/v1499575398/1-north_adhoox.png';
const north_east = 'http://res.cloudinary.com/haswind/image/upload/v1499575399/2-north-east_hizwcg.png';
const east = 'http://res.cloudinary.com/haswind/image/upload/v1499575396/3-east_gkdbty.png';
const south_east = 'http://res.cloudinary.com/haswind/image/upload/v1499575399/4-south-east_q6tz1h.png';
const south = 'http://res.cloudinary.com/haswind/image/upload/v1499575398/5-south_gexaam.png';
const south_west = 'http://res.cloudinary.com/haswind/image/upload/v1499575397/6-south-west_hbxhgs.png';
const west = 'http://res.cloudinary.com/haswind/image/upload/v1499575400/7-west_hkybna.png';
const north_west = 'http://res.cloudinary.com/haswind/image/upload/v1499575398/8-north-west_xnx3jo.png';

const cloudinary_format = 'http://res.cloudinary.com/haswind/image/upload/c_scale,q_40,w_300/v1505516772/teamgrid/';

//chathuranga
const defImg_chathu    = cloudinary_format + 'chathuranga/0.jpg';
const north_chathu  = cloudinary_format + 'chathuranga/1.jpg';
const north_east_chathu = cloudinary_format + 'chathuranga/2.jpg';
const north_east_east_chathu = cloudinary_format + 'chathuranga/10_NEE.jpg';
const east_chathu = cloudinary_format + 'chathuranga/3.jpg';
const south_east_chathu = cloudinary_format + 'chathuranga/4.jpg';
const south_east_east_chathu = cloudinary_format + 'chathuranga/9_SEE.jpg';
const south_chathu = cloudinary_format + 'chathuranga/5.jpg';
const south_west_chathu = cloudinary_format + 'chathuranga/6.jpg';
const west_chathu = cloudinary_format + 'chathuranga/7.jpg';
const north_west_chathu = cloudinary_format + 'chathuranga/8.jpg';

//kasun
const defImg_kasun    = cloudinary_format + 'kasun/0.jpg';
const north_kasun  = cloudinary_format + 'kasun/1.jpg';
const north_east_kasun = cloudinary_format + 'kasun/2.jpg';
const north_east_east_kasun = cloudinary_format + 'kasun/10_NEE.jpg';
const east_kasun = cloudinary_format + 'kasun/3.jpg';
const south_east_kasun = cloudinary_format + 'kasun/4.jpg';
const south_east_east_kasun = cloudinary_format + 'kasun/9_SEE.jpg';
const south_kasun = cloudinary_format + 'kasun/5.jpg';
const south_west_kasun = cloudinary_format + 'kasun/6.jpg';
const west_kasun = cloudinary_format + 'kasun/7.jpg';
const north_west_kasun = cloudinary_format + 'kasun/8.jpg';

//jala
const defImg_jala    = cloudinary_format + 'jala/0.jpg';
const north_jala  = cloudinary_format + 'jala/1.jpg';
const north_east_jala = cloudinary_format + 'jala/2.jpg';
//const north_east_east_jala = cloudinary_format + 'jala/10_NEE.jpg';
const east_jala = cloudinary_format + 'jala/3.jpg';
const south_east_jala = cloudinary_format + 'jala/4.jpg';
//const south_east_east_jala = cloudinary_format + 'jala/9_SEE.jpg';
const south_jala = cloudinary_format + 'jala/5.jpg';
const south_west_jala = cloudinary_format + 'jala/6.jpg';
const west_jala = cloudinary_format + 'jala/7.jpg';
const north_west_jala = cloudinary_format + 'jala/8.jpg';

//haswin
const defImg_haswin    = cloudinary_format + 'haswin/0.jpg';
const north_haswin  = cloudinary_format + 'haswin/1.jpg';
const north_east_haswin = cloudinary_format + 'haswin/2.jpg';
//const north_east_east_haswin = cloudinary_format + 'haswin/10_NEE.jpg';
const east_haswin = cloudinary_format + 'haswin/3.jpg';
const south_east_haswin = cloudinary_format + 'haswin/4.jpg';
const south_west_west_haswin = cloudinary_format + 'haswin/6_SWW.jpg';
const south_haswin = cloudinary_format + 'haswin/5.jpg';
const south_west_haswin = cloudinary_format + 'haswin/6.jpg';
const west_haswin = cloudinary_format + 'haswin/7.jpg';
const north_west_haswin = cloudinary_format + 'haswin/8.jpg';

//dinuka
const defImg_dinuka    = cloudinary_format + 'dinuka/0.jpg';
const north_dinuka  = cloudinary_format + 'dinuka/1.jpg';
const north_east_dinuka = cloudinary_format + 'dinuka/2.jpg';
//const north_east_east_dinuka = cloudinary_format + 'dinuka/10_NEE.jpg';
const east_dinuka = cloudinary_format + 'dinuka/3.jpg';
const south_east_dinuka = cloudinary_format + 'dinuka/4.jpg';
//const south_west_west_dinuka = cloudinary_format + 'dinuka/6_SWW.jpg';
const south_dinuka = cloudinary_format + 'dinuka/5.jpg';
const south_west_dinuka = cloudinary_format + 'dinuka/6.jpg';
const west_dinuka = cloudinary_format + 'dinuka/7.jpg';
const north_west_dinuka = cloudinary_format + 'dinuka/8.jpg';

//hashi
const defImg_hashi    = cloudinary_format + 'hashi/0.jpg';
const north_hashi  = cloudinary_format + 'hashi/1.jpg';
const north_east_hashi = cloudinary_format + 'hashi/2.jpg';
//const north_east_east_hashi = cloudinary_format + 'hashi/10_NEE.jpg';
const east_hashi = cloudinary_format + 'hashi/3.jpg';
const south_east_hashi = cloudinary_format + 'hashi/4.jpg';
//const south_west_west_hashi = cloudinary_format + 'hashi/6_SWW.jpg';
const south_hashi = cloudinary_format + 'hashi/5.jpg';
const south_west_hashi = cloudinary_format + 'hashi/6.jpg';
const west_hashi = cloudinary_format + 'hashi/7.jpg';
const north_west_hashi = cloudinary_format + 'hashi/8.jpg';

//sachin
const defImg_sachin    = cloudinary_format + 'sachin/0.jpg';
const north_sachin  = cloudinary_format + 'sachin/1.jpg';
const north_east_sachin = cloudinary_format + 'sachin/2.jpg';
//const north_east_east_sachin = cloudinary_format + 'sachin/10_NEE.jpg';
const east_sachin = cloudinary_format + 'sachin/3.jpg';
const south_east_sachin = cloudinary_format + 'sachin/4.jpg';
//const south_west_west_sachin = cloudinary_format + 'sachin/6_SWW.jpg';
const south_sachin = cloudinary_format + 'sachin/5.jpg';
const south_west_sachin = cloudinary_format + 'sachin/6.jpg';
const west_sachin = cloudinary_format + 'sachin/7.jpg';
const north_west_sachin = cloudinary_format + 'sachin/8.jpg';

//cactus
const defImg_cactus    = cloudinary_format + 'cactus/0.jpg';
const north_cactus  = cloudinary_format + 'cactus/1.jpg';
const north_east_cactus = cloudinary_format + 'cactus/2.jpg';
const east_cactus = cloudinary_format + 'cactus/3.jpg';
const south_east_cactus = cloudinary_format + 'cactus/4.jpg';
const south_cactus = cloudinary_format + 'cactus/5.jpg';
const south_west_cactus = cloudinary_format + 'cactus/6.jpg';
const west_cactus = cloudinary_format + 'cactus/7.jpg';
const north_west_cactus = cloudinary_format + 'cactus/8.jpg';

var Img_Array = [
  defImg_chathu, north_chathu, north_east_chathu,
  north_east_east_chathu, east_chathu, south_east_chathu,
  south_east_east_chathu, south_chathu, south_west_chathu,
  west_chathu, north_west_chathu,
  defImg_kasun, north_kasun, north_east_kasun, north_east_east_kasun,
  east_kasun, south_east_kasun, south_east_east_kasun, south_kasun,
  south_west_kasun, west_kasun, north_west_kasun,
  defImg_jala, north_jala, north_east_jala, east_jala, south_east_jala, south_jala,
  south_west_jala, west_jala, north_west_jala,
  defImg_haswin, north_haswin, east_haswin, south_east_haswin,
  south_west_west_haswin, south_haswin, south_west_haswin, west_haswin,
  north_west_haswin,
  defImg_dinuka, north_dinuka, north_east_dinuka, east_dinuka,
  south_east_dinuka, south_dinuka, south_west_dinuka,
  west_dinuka, north_west_dinuka, defImg_hashi, north_hashi, north_east_hashi,
  east_hashi, south_east_hashi, south_hashi,  south_west_hashi,
  west_hashi, north_west_hashi,
  defImg_sachin, north_sachin, north_east_sachin, east_sachin, south_east_sachin,
  south_sachin, south_west_sachin, west_sachin, north_west_sachin,
  defImg_cactus, north_cactus, north_east_cactus, east_cactus, south_east_cactus, south_cactus,
  south_west_cactus, west_cactus, north_west_cactus
];

var TeamGrid = React.createClass({

  // keeps track of loaded images.
  handleImageLoaded : function() {
    // this.setState({
    //   loadedImgCount : this.state.loadedImgCount + 1,
    //   imageStatus: 'loading'
    // });

    // if (this.state.loadedImgCount === (Img_Array.length - 1)){
    //   this.setState({
    //     imageStatus: 'loaded',
    //     isLoading : false,
    //     fname: 'ONE CARING',
    //     lname: 'TEAM',
    //     url_1: defImg_dinuka,
    //     url_2: defImg_hashi,
    //     url_3: defImg_chathu,
    //     url_4: defImg_sachin,
    //     url_5: defImg_haswin,
    //     url_6: defImg_kasun,
    //     url_7: defImg_jala,
    //     url_8: defImg_cactus
    //   });
    //
    // } else {
    //   console.log('count ', this.state.loadedImgCount);
    // }
    console.log('Team Grid called!');
    this.setState({
      imageStatus: 'loaded',
      isLoading : false,
      fname: 'ONE CARING',
      lname: 'TEAM',
      url_1: defImg_dinuka,
      url_2: defImg_hashi,
      url_3: defImg_chathu,
      url_4: defImg_sachin,
      url_5: defImg_haswin,
      url_6: defImg_kasun,
      url_7: defImg_jala,
      url_8: defImg_cactus
    }, () => {
      console.log('Team grid status updated!');
    });

  },
  handleImageError : function(item) {
    console.log('Failed to load :', item);
    this.setState({ imageStatus: 'failed to load' });

  },
  handlePolyOver : function(id) {
    if(!this.state.isLoading) {
      switch (id) {
        case 1:
          this.setState({
            fname: 'Dinuka',
            lname: '',
            desc: 'The young blood within the company, young blood is constantly into challenges and they are always sensitive to the trends. So our expertise will assist you in having an innovative and an eminent IT business solution that will attract more potential customers.',
            url_1:defImg_dinuka,
            url_2:west_hashi,
            url_3:north_east_chathu,
            url_4:north_west_sachin,
            url_5:north_west_haswin,
            url_6:north_kasun,
            url_7:north_west_jala,
            url_8:north_cactus
          });
          break;
        case 2:
          this.setState({
            fname: 'Hashi',
            lname: '',
            desc: 'The young blood within the company, young blood is constantly into challenges and they are always sensitive to the trends. So our expertise will assist you in having an innovative and an eminent IT business solution that will attract more potential customers.',
            url_1:east_dinuka,
            url_2:defImg_hashi,
            url_3:north_east_east_chathu,
            url_4:north_east_sachin,
            url_5:north_west_haswin,
            url_6:north_east_kasun,
            url_7:north_jala,
            url_8:north_cactus
          });
          break;
        case 3:
          this.setState({
            fname: 'Chathuranga',
            lname: '',
            desc: 'The young blood within the company, young blood is constantly into challenges and they are always sensitive to the trends. So our expertise will assist you in having an innovative and an eminent IT business solution that will attract more potential customers.',
            url_1:south_west_dinuka,
            url_2:south_west_hashi,
            url_3:defImg_chathu,
            url_4:west_sachin,
            url_5:west_haswin,
            url_6:north_west_kasun,
            url_7:north_west_jala,
            url_8:north_west_cactus
          });
          break;
        case 4:
          this.setState({
            fname: 'Sachin',
            lname: '',
            desc: 'The young blood within the company, young blood is constantly into challenges and they are always sensitive to the trends. So our expertise will assist you in having an innovative and an eminent IT business solution that will attract more potential customers.',
            url_1:south_east_dinuka,
            url_2:south_west_hashi,
            url_3:east_chathu,
            url_4:defImg_sachin,
            url_5:west_haswin,
            url_6:north_east_kasun,
            url_7:north_west_jala,
            url_8:north_cactus
          });
          break;
        case 5:
          this.setState({
            fname: 'Haswin',
            lname: '',
            desc: 'The young blood within the company, young blood is constantly into challenges and they are always sensitive to the trends. So our expertise will assist you in having an innovative and an eminent IT business solution that will attract more potential customers.',
            url_1:south_east_dinuka,
            url_2:south_east_hashi,
            url_3:east_chathu,
            url_4:east_sachin,
            url_5:defImg_haswin,
            url_6:north_east_east_kasun,
            url_7:north_east_jala,
            url_8:north_east_cactus
          });
          break;
        case 6:
          this.setState({
            fname: 'Kasun',
            lname: '',
            desc: 'The young blood within the company, young blood is constantly into challenges and they are always sensitive to the trends. So our expertise will assist you in having an innovative and an eminent IT business solution that will attract more potential customers.',
            url_1:south_dinuka,
            url_2:south_west_hashi,
            url_3:south_east_chathu,
            url_4:south_west_sachin,
            url_5:south_west_haswin,
            url_6:defImg_kasun,
            url_7:west_jala,
            url_8:north_west_cactus
          });
          break;
        case 7:
          this.setState({
            fname: 'Nafeel',
            lname: '',
            desc: 'The young blood within the company, young blood is constantly into challenges and they are always sensitive to the trends. So our expertise will assist you in having an innovative and an eminent IT business solution that will attract more potential customers.',
            url_1:south_east_dinuka,
            url_2:south_hashi,
            url_3:south_east_east_chathu,
            url_4:south_east_sachin,
            url_5:south_west_west_haswin,
            url_6:east_kasun,
            url_7:defImg_jala,
            url_8:north_east_cactus
          });
          break;
        case 8:
          this.setState({
            fname: 'Cactus',
            lname: '',
            desc: 'Content about Cactus will be updated soon. Well for now lets just say she is good at sleeping and eating.',
            url_1:south_dinuka,
            url_2:south_hashi,
            url_3:south_east_chathu,
            url_4:south_sachin,
            url_5:south_west_west_haswin,
            url_6:south_east_kasun,
            url_7:south_west_jala,
            url_8:defImg_cactus
          });
          break;
      }
    }

  },

  handleResetGrid : function() {
    if(!this.state.isLoading) {
      this.setState({
        fname: 'ONE CARING',
        lname: 'TEAM',
        url_1: defImg_dinuka,
        url_2: defImg_hashi,
        url_3: defImg_chathu,
        url_4: defImg_sachin,
        url_5: defImg_haswin,
        url_6: defImg_kasun,
        url_7: defImg_jala,
        url_8: defImg_cactus
      });
    }
  },
  getInitialState : function(){
    return {
      imgArray : Img_Array,
      isLoading : true,
      loadedImgCount : 0,
      imageStatus: 'loading',
      fname: 'ONE CARING',
      lname: 'TEAM',
      desc: 'The young blood within the company, young blood is constantly into challenges and they are always sensitive to the trends. So our expertise will assist you in having an innovative and an eminent IT business solution that will attract more potential customers.',
      url_1:  spinner,
      url_2:  spinner,
      url_3:  spinner,
      url_4:  spinner,
      url_5:  spinner,
      url_6:  spinner,
      url_7:  spinner,
      url_8:  spinner


    };
  },
  render:function(){
    var { fname, lname, desc, url_1,url_2,url_3,url_4,url_5,url_6,url_7,url_8 , imgArray} = this.state;

    return (
      <div classsName = "small-12 medium-12 large-12">
        <div className= 'teamgrid-main-wrap' >
          {/* <div className="progress progress-teamgrid" role="progressbar" tabIndex="0"
            aria-valuenow= { (this.state.loadedImgCount / this.state.imgArray.length ) * 100} aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
            <div className="progress-meter progress-meter-teamgrid" style={{width: (this.state.loadedImgCount / this.state.imgArray.length ) * 100 + '%'}}></div>
          </div> */}
          {/* <h1>{this.state.loadedImgCount}</h1>
          <h1>Total :{this.state.imgArray.length}</h1>
          <h1>{ (this.state.loadedImgCount / this.state.imgArray.length ) * 100} % </h1>
          <h2>{this.state.imageStatus}</h2> */}
          <div className="floating-about-text hide-for-small-only">
            <h2 className="about-title">{fname}&nbsp;<span className= "red-span">{lname}</span> </h2>
            <p>{desc}</p>
          </div>
          <div className="floating-about-text-mob show-for-small-only">
            <h2 className="about-title">ONE CARING&nbsp;<span className= "red-span">TEAM</span> </h2>
          </div>
          <div className = 'svg-wrapper'>
                <svg version="1.1" id="Team" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1440 905"
                style={{enableBackground: 'new 0 0 1440 905'}} xmlSpace="preserve">
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
                            <image
                              onMouseEnter={() => this.handlePolyOver(7)}
                              style={{overflow: 'visible'}}
                              width={600} height={600}
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

          <div>
            <ImageLoader  imgArray = {imgArray} loadingOverlay= {true} sectionName="About Us" onLoadCompleted= {this.handleImageLoaded} handleImageError= {this.handleImageError} />
            {/* {
              imgArray.map((item, index) => (
                 <img
                   className="render_hidden"
                   key={index}
                   src= {item}
                   onLoad={this.handleImageLoaded}
                   onError={() => this.handleImageError(item)}
                 />
              ))
            } */}

          </div>
        </div>

      </div>
    );
  }
});

module.exports = TeamGrid;
