var React = require('react');


//use of stateless functional components

// var About = React.createClass({
//   render:function(){
//     return(
//       <div>
//         <h2>About component</h2>
//     </div>
//     );
//   }
// });

/*About component does not manage any state . When we have a component which
only uses a render function we can use a stateless functional component as below*/

// var About = function(props){
//   return(
//     <div>
//       <h2>About component</h2>
//     </div>
//   );
// }

//we can further make is simple with the use of arrow functions as below

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application built on React.I have used Open Weather Map API to search for weather using the city name.
        Simply enter the city name on the search and get the weather details.
        <br/><br/><a href="https://github.com/HaswinVidanage/ReactWeather" target="_new">ReactWeather</a> - Project Repository.
        <br/>
        &copy;2017 Haswin Vidanage

      </p>
      <hr/>
      <p>
        Here are some of the tools I used :
      </p>

      <ul>
        <li>
          <a href="https://facebook.github.io/react/" target="_new">React</a> - JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org/" target="_new">Open Weather Map</a> - API used.
        </li>
        <li>
          <a href="http://foundation.zurb.com/" target="_new">Foundation</a> - Front-end framework.
        </li>
      </ul>
    </div>
  );
}
module.exports = About;
