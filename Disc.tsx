import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { connect, Dispatch } from 'react-redux';
import { doIt } from './actions';


interface DiscProps {
  owner: HTMLDivElement;
  dispatch: Dispatch<any>;
  // domain
  top: any;
  left: any;
  // bottom
  heightOfBottom: string;
  // front
  innerHTMLForFrontFront: string;
  innerHTMLForFrontInner: string;
  backgroundColor: string;
  angleOfFront: any,
  // back
  innerHTMLForBackOuter: string,
}

interface DiscState {
  innerHTMLForFrontFront: string;
}

// ジェネリクスの第1引数はprops, 第2引数はLocalState
export default class Disc extends Component<DiscProps, DiscState> {

  public static defaultProps: DiscProps = {
    owner: null,
    dispatch: null,
    // domain
    top: 0,
    left: 0,
    backgroundColor: "none",
    // bottom
    heightOfBottom: "0px",
    // front
    angleOfFront: 0,
    innerHTMLForFrontFront: "",
    innerHTMLForFrontInner: "",
    // back
    innerHTMLForBackOuter: ""
  };

  routines: any[];
  timer;
  domain = React.createRef<HTMLDivElement>();
  bottom = React.createRef<HTMLDivElement>();
  joint = React.createRef<HTMLDivElement>();
  front = React.createRef<HTMLDivElement>();

  backJoint;
  back;

  doRoutine = (function() {
    let along;
    if (1 <= this.routines.length) {
      along = this.routines.pop();
      for (let i = 0; i <= along.length - 1; i++) along[i]();
    }
  }).bind(this);

  constructor(props: DiscProps) {
    super(props);
    this.state = {
      innerHTMLForFrontFront: ""
    };
    this.backJoint = React.createRef<HTMLDivElement>();
    this.back = React.createRef<HTMLDivElement>();
    this.routines = [];
  }

  componentDidMount() {
    this.joint.current.style.transform += 'rotateX(' + this.props.angleOfFront + ')';
  }

  drawFrontFront() {
    return {
      __html: this.props.innerHTMLForFrontFront,
    };
  }

  drawFront() {
    return (
          <div ref={this.joint} className="joint Disc">
            <div ref={this.front} className="front" onClick={(e) => {this.onClickForFront(e);}}>
              {this.redraw()}
              <span dangerouslySetInnerHTML={this.drawFrontFront()}></span>
              <div className="FrontInner">
                {this.props.innerHTMLForFrontInner}
              </div>
            </div>
          </div>
    );
  }

  drawBack() {
    return (
      <div ref={this.backJoint}>
      </div>
    );
  }

  drawBottom() {
  }

  onClickForFront(e) {
    this.props.owner.current.dispatchEvent(new CustomEvent("done", {detail: {data_1: "RazorEdge"}}));
//    this.props.dispatch(doIt("a", "red"));
  }

  redraw() {
    try {
      this.front.current.style.backgroundColor = this.props.backgroundColor;
//      console.log(this.props.backgroundColor);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div ref={this.domain} style={{position: 'relative', top: this.props.top, left: this.props.left}}>
        <div ref={this.bottom} className="bottom">
          {this.drawFront()}
          {this.drawBack()}
        </div>
      </div>
    );
  }
}