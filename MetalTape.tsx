import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { connect, Dispatch } from 'react-redux';
import { doIt } from './actions';


interface MetalTapeProps {
  owner: HTMLDivElement;
  dispatch: Dispatch<any>;
  // domain
  top: any;
  left: any;
  // bottom
  innerHTMLForBottomBack: string;
  // front
  innerHTMLForFrontFront: string;
  backgroundColor: string;
  angleOfFront: any,
}

interface MetalTapeState {
  innerHTMLForFrontFront: string;
}

// ジェネリクスの第1引数はprops, 第2引数はLocalState
export default class MetalTape extends Component<MetalTapeProps, MetalTapeState> {

  public static defaultProps: MetalTapeProps = {
    owner: null,
    dispatch: null,
    // domain
    top: 0,
    left: 0,
    backgroundColor: "none",
    innerHTMLForBottomBack: "",
    // front
    angleOfFront: "45deg",
    innerHTMLForFrontFront: "",
  };

  routines: any[];
  timer;
  domain = React.createRef<HTMLDivElement>();
  bottom = React.createRef<HTMLDivElement>();
  front = React.createRef<HTMLDivElement>();
  frontJoint = React.createRef<HTMLDivElement>();
  right = React.createRef<HTMLDivElement>();
  rightJoint = React.createRef<HTMLDivElement>();
  shown = false;

  doRoutine = (function() {
    let along;
    if (1 <= this.routines.length) {
      along = this.routines.pop();
      for (let i = 0; i <= along.length - 1; i++) along[i]();
    }
  }).bind(this);

  constructor(props: MetalTapeProps) {
    super(props);
    this.state = {
      innerHTMLForFrontFront: ""
    };
    this.routines = [];
  }

  componentDidMount() {

    let takePose_1 = () => {
      this.front.current.style.transform += 'rotateX(180deg)';
      this.frontJoint.current.style.transform += 'rotateX(' + this.props.angleOfFront + ')';
    };
    let takpPose_2 = () => {
      this.front.current.style.transform += 'rotateX(180deg)';
//      this.frontJoint.current.style.transform += 'translateX(' + '15px' + ')';
      this.frontJoint.current.style.transform += 'rotateX(' + this.props.angleOfFront + ')';
//      this.frontJoint.current.style.transform += 'rotateY(' + '85deg' + ')';
    };
    let takePose_3 = () => {
      this.rightJoint.current.style.transform += 'translateX(15px)';
      this.rightJoint.current.style.transform += 'translateY(15px)';
      this.rightJoint.current.style.transform += 'rotateZ(-90deg)';
      this.rightJoint.current.style.transform += "rotateX(45deg)";
    };

    takePose_1();

    takePose_3();
  }

  drawFrontFront() {
    return {
      __html: this.props.innerHTMLForFrontFront,
    };
  }

  onClickForFront(e) {
//    this.props.owner.current.dispatchEvent(new CustomEvent("done", {detail: {data_1: "RazorEdge"}}));
  }

  onClickTab(e) {
//      console.log(e);
    let spreadOrHoldFront = () => {
      (this.shown) ? this.frontJoint.current.style.transform += 'rotateX(' + '-45deg' + ')' : this.frontJoint.current.style.transform += 'rotateX(' + '45deg' + ')';
      this.shown = !this.shown;
    };

    let spreadOrHoldRight = () => {
      (this.shown) ? this.rightJoint.current.style.transform += 'rotateX(' + '-45deg' + ')' : this.rightJoint.current.style.transform += 'rotateX(' + '45deg' + ')';
      this.shown = !this.shown;
    };

    spreadOrHoldRight();
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
      <div ref={this.domain} style={{position: 'relative', top: this.props.top, left: this.props.left}} className='MetalTape'>
        <div ref={this.bottom} onClick={(e) => {this.onClickTab(e);}} className="bottom">
          {this.props.innerHTMLForBottomBack}
          <div ref={this.frontJoint} className="FrontJoint">
            <div ref={this.front} className="front" onClick={(e) => {this.onClickForFront(e);}}>
              {this.redraw()}
              <span dangerouslySetInnerHTML={this.drawFrontFront()}></span>
            </div>
          </div>
          <div ref={this.rightJoint} className="RightJoint">
            <div ref={this.right} className="Right" onClick={(e) => {}}>
              {this.redraw()}
              <span dangerouslySetInnerHTML={this.drawFrontFront()}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}