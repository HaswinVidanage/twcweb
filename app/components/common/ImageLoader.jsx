var React = require('react');
var {Link, IndexLink} = require('react-router');
import CircularProgressbar from 'react-circular-progressbar';

var ImageLoader = React.createClass({
  handleImageLoaded : function() {
    this.setState({
      loadedImgCount : this.state.loadedImgCount + 1
    });

    if (this.state.loadedImgCount === (this.props.imgArray.length - 1)){
      console.log('IMAGE LOADER LOG! Load complete : ', this.state.loadedImgCount);
      this.setState({
        imageStatus: 'loaded',
        isLoading : false,
      });

      this.props.onLoadCompleted();
    } else {
      console.log('loader failed count ', this.state.loadedImgCount);
    }

  },
  getInitialState : function(){
    return {
      loadedImgCount : 0,
      isLoading : true,
      imageStatus: 'loading'
    };
  },
  render:function(){
    var {imgArray, loadingOverlay,sectionName} = this.props;
    var percentage = Math.round((this.state.loadedImgCount / this.props.imgArray.length ) * 100);
    return (
      <div>

      {loadingOverlay && this.state.isLoading &&
        <div className='loading-overlay'>
          <div className="small-6 small-centered columns" id="loader-container">
            <div className="row">
              <div className ="small-6">
                <p className="ldr-txt">{(percentage ===  100) ? 'Complete' : 'We Are Loading'}</p>
              </div>
              <div className ="small-6">
                <CircularProgressbar
                   className="circular-loader"
                   percentage={percentage} />
                </div>
              </div>
            </div>
        </div>
      }
      {
        imgArray.map((item, index) => (
           <img
             className="render_hidden"
             key={index}
             src= {item}
             onLoad={this.handleImageLoaded}
             onError={() => this.handleImageError(item)}
           />
        ))
      }
      </div>
    );
  }
});

module.exports = ImageLoader;
