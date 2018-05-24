import React, { Component } from 'react';


class PrimaryLocations extends Component {
  render() {
    return (
      <div className=" medium-12 large-12">
        <div className="small-6 medium-6 large-6 columns prime-loc-left">
          <div className="loc-text-wrap">
            <h1 className="loc-heading">DEHIWALA, LK</h1>
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
              8 Warrina court<br/>
              Burwood east<br/>
              Victoria 3151<br/>
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default PrimaryLocations;
