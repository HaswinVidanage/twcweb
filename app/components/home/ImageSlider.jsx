var React = require('react');

var ImageSlider = React.createClass({

  getInitialState: function () {
       return {position: 0};
   },

   componentDidMount: function () {
     setTimeout(() => {
          this.setState({ position: 1 });
      }, 3000);
   },


  render(){

    var images = [
      'http://res.cloudinary.com/haswind/image/upload/v1527072098/clients/sms-logo.png',
      'http://res.cloudinary.com/haswind/image/upload/q_30/v1507143873/clients/fslga.png',
      'http://res.cloudinary.com/haswind/image/upload/q_30/v1507143871/clients/threesinha.png',
      'http://res.cloudinary.com/haswind/image/upload/q_30/v1507143868/clients/azonic.png',
      'http://res.cloudinary.com/haswind/image/upload/v1527076682/clients/ceylon-jewelry.png',
      'http://res.cloudinary.com/haswind/image/upload/v1527076683/clients/hyundai-srilanka.png',
    ];

   //  let timerId = setInterval(() => alert('tick'), 2000);
   //
   // // after 5 seconds stop
   // setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);





      return(
            <div className="row">
              <div className="small-12 content column small-block-grid-12">
{this.state.position}

                   {images.map(function(image,index){
                     if(index < 2){
                          return <div className="small-6 content column"><img src={image} /></div>
                      }
                      else if (index>=2 && index < 4) {
                          return <div className="small-6 content column"><img src={image} /></div>
                      }
                      else if (index>=4) {
                          return <div className="small-6 content column"><img src={image} /></div>
                      }
                    })}


            </div>
          </div>
      );
    }
});

module.exports = ImageSlider;
