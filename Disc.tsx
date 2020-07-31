import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { connect, Dispatch } from 'react-redux';
import { doIt } from './actions';


interface DiscProps {
  innerHTMLForFrontFront: string;
  backgroundColor: string;
  dispatch: Dispatch<any>;
  angleOfFront: any,
  top: any;
  left: any;
}

interface DiscState {
  innerHTMLForFrontFront: string;
}

// ジェネリクスの第1引数はprops, 第2引数はLocalState
export default class Disc extends Component<DiscProps, DiscState> {

  public static defaultProps: DiscProps = {
    innerHTMLForFrontFront: "",
    backgroundColor: "none",
    dispatch: null,
    angleOfFront: 0,
    top: 0,
    left: 0
  };

  routines: any[];
  timer;
  domain = React.createRef<HTMLDivElement>();
  bottom = React.createRef<HTMLDivElement>();
  joint = React.createRef<HTMLDivElement>();
  front = React.createRef<HTMLDivElement>();

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
    this.routines = [];
  }

  componentDidMount() {
//    this.refs["front"].style.transform += "rotateZ(180deg)";

    // as HTMLCollectionOf<HTMLElement>
//    this.bottom.current.style.transform += "rotateX(45deg)";
    this.joint.current.style.transform += 'rotateX(' + this.props.angleOfFront + ')';
    
//    this.props.dispatch(doIt("結ぶ<br />coat 醤油<br />炙る"));
/*
    new Promise((resolve, reject) => {setTimeout(resolve, 1000);}).then(() => {
      this.setState({innerHTMLForFrontFront: 
        `結ぶ<br />
        coat 醤油<br />
        炙る</span>`
      });
      this.timer = setInterval(this.doRoutine, 1000);
    });
    this.routines.push([() => {this.refs["joint"].style.transform += "rotateX(15deg)";}]);
*/
  }

  drawFrontFront() {
    return {
      __html: this.props.innerHTMLForFrontFront,
    };
  }

  onClickForFront(e) {
//    this.props.dispatch(doIt("a", "red"));
  }

  redraw() {
    try {
      this.front.current.style.backgroundColor = this.props.backgroundColor;
      console.log(this.props.backgroundColor);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div ref={this.domain} style={{position: 'relative', top: this.props.top, left: this.props.left}}>
        <div ref={this.bottom} className="bottom">
          <div ref={this.joint} className="joint">
            <div ref={this.front} className="front" onClick={(e) => {this.onClickForFront(e);}}>
              {this.redraw()}
              <span dangerouslySetInnerHTML={this.drawFrontFront()}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}