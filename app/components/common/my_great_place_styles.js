const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  // position: 'absolute',
  // width: K_WIDTH,
  // height: K_HEIGHT,
  // left: -K_WIDTH / 2,
  // top: -K_HEIGHT / 2,
  //
  // border: '5px solid #f44336',
  // borderRadius: K_HEIGHT,
  // backgroundColor: 'white',
  // textAlign: 'center',
  // color: '#3f51b5',
  // fontSize: 16,
  // fontWeight: 'bold',
  // padding: 4

  //pin
  width: '30px',
  height: '30px',
 'border-radius': '50% 50% 50% 0',
  background: '#89849b',
  position: 'absolute',
  transform: 'rotate(-45deg)',
  left:' 50%',
  top: '50%',
  margin: '-20px 0 0 -20px',
  'animation-name': 'bounce',
  'animation-fill-mode': 'both',
  'animation-duration': '1s'

};

export {greatPlaceStyle};
