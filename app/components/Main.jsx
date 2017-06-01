var React = require('react');
var Nav = require('Nav');


// var Main = React.createClass({
//   render:function(){
//     return(
//       <div>
//         <Nav/>
//         <h2>Main component</h2>
//         {this.props.children}
//     </div>
//     );
//   }
// });

//refactored the above with arrow functions

//<div className="row">
//  <div className="columns medium-6 large-4 small-centered">{props.children}</div>
//</div>
var Main = (props) =>{
  return(
    <div>
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
