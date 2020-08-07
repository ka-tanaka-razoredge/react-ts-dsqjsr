import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Disc from './Disc';

export default class Historian extends Disc {

  backJoint;
  back;
  bottom;

  componentDidMount() {
    this.bottom.current.style.height = this.props.heightOfBottom;
    this.bottom.current.style.width = "1px";
    this.bottom.current.style.backgroundColor = "red";
    this.bottom.current.style.border = "1px solid red";
    let value;
    value = this.bottom.current.style.height;
    this.backJoint.current.style.top = value;
  }

  drawFront() {
    return (
      <div></div>
    );
  }

  drawBack() {
    return (
      <div ref={this.backJoint} className="BackJoint">
        <div ref={this.back} className="Back">
          {this.props.innerHTMLForBackOuter}
        </div>
      </div>
    );
  }

/*  
  render() {
    return (
      <div>
      </div>
    );
  }
*/
}