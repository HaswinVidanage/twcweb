var React = require('react');
var Nav = require('Nav');

var Main = (props) =>{
  return(
    <div className="main-wrapper">
      <div className="main-nav-wrapper">
        <Nav/>
      </div>
      <div >
        <div>{props.children}</div>
      </div>
  </div>
  );
}

module.exports = Main;
