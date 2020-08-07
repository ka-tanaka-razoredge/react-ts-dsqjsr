import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';


interface OpenBoxBedProps {
  top: any;
  left: any;
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
    height: "100px"
  };


  constructor(props: OpendBoxBedProps) {
    super(props);
  }

  render() {
    return (
      <div ref={this.bottom} className="OpenBoxBed" style={{top: this.props.top, left: this.props.left}}>
        <div ref={this.joint} className="Joint">
          <div ref={this.bed} className="Bed" style={{height: this.props.height}}>
            {this.props.contents}
          </div>
        </div>
      </div>
    );
  }

}