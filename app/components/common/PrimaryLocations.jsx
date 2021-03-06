import React, { Component } from 'react';


class PrimaryLocations extends Component {
  render() {
    return (
      <div className=" medium-12 large-12">
        <div className="small-6 medium-6 large-6 columns prime-loc-left">
          <div className="loc-text-wrap">
            <h1 className="loc-heading">COLOMBO, LK</h1>
            <p  className="loc-title">
              25 VIJITHA RD,<br/>
              NADIMALA,<br/>
              DEHIWALA (10230),<br/>
              SRI LANKA
            </p>
          </div>
        </div>
        <div className="small-6 medium-6 large-6 columns prime-loc-right">
          <div className="loc-text-wrap">
            <h1 className="loc-heading">MELBOURNE, AUS</h1>
            <p  className="loc-title">
              91 WELLINGTON ROAD,<br/>
              CLAYTON VIC,<br/>
              MELBOURNE (3168),<br/>
              AUSTRALIA
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default PrimaryLocations;
