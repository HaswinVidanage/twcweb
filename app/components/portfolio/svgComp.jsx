import React, { Component } from 'react'

export default class GeneratedComponent extends Component {

  linkAs = (key, attrs) => (
    (this.__cb4r3fs || (this.__cb4r3fs = new Map())).get(key) || this.__cb4r3fs.set(key, node => (
      this.refs[key] !== node && (this.refs = Object.assign({}, this.refs, { [key]: node })),
      node && Object.keys(attrs).forEach(attr => node.setAttributeNS(null, attr, attrs[attr]))
    )).get(key)
  )

  render () {

    return (
      <svg ref={ this.linkAs("Layer_1", {  }) } version={ 1 } id="Layer_1" style={{ enableBackground: 'new 0 0 1000 1000' }} >
        
        <path ref={ this.linkAs('path0', { 'className': "st0" }) } d="M713.4 870.3c0 36-29.5 65.5-65.5 65.5H358.3c-36 0-65.5-29.5-65.5-65.5V115.8c0-36 29.4-65.5 65.5-65.5H648c36 0 65.5 29.5 65.5 65.5l-.1 754.5z"  />
        <path ref={ this.linkAs('path1', { 'className': "st1" }) } d="M313 171.2h382v647.4H313z"  />
        <path ref={ this.linkAs('path2', { 'className': "st2" }) } d="M532.6 870.9c0 16.3-13.2 29.6-29.5 29.6s-29.5-13.2-29.5-29.6c0-16.3 13.2-29.5 29.5-29.5s29.5 13.2 29.5 29.5z"  />
        <path ref={ this.linkAs('path3', { 'className': "st3" }) } d="M534.8 129.6c0 4.8-4 8.8-8.9 8.8h-55.1c-4.9 0-8.9-4-8.9-8.8 0-4.9 4-8.8 8.9-8.8h55.1c4.9 0 8.9 4 8.9 8.8z"  />
      </svg>
    )
  }
}
