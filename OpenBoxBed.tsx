import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';


interface OpenBoxBedProps {
  top: any;
  left: any;
  width: any;
  height: any;
}

interface OpenBoxBedState {
}

export default class OpenBoxBed extends Component<OpenBoxBedProps, OpenBoxBedState> {

  bottom = React.createRef<HTMLDivElement>();
  joint = React.createRef<HTMLDivElement>();
  bed = React.createRef<HTMLDivElement>();

  public static defaultProps: DiscProps = {
    top: "0px",
    left: "0px",
    width: "400px",
    height: "100px"
  };


  constructor(props: OpendBoxBedProps) {
    super(props);
  }

  render() {
    return (
      <div ref={this.bottom} className="OpenBoxBed" style={{top: this.props.top, left: this.props.left, width: this.props.width}}>
        <div ref={this.joint} className="Joint">
          <div ref={this.bed} className="Bed" style={{height: this.props.height, width: this.props.width}}>
            {this.props.contents}
          </div>
        </div>
      </div>
    );
  }

}