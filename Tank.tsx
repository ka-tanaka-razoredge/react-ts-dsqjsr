import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { connect, Dispatch } from 'react-redux';
import DiscWrapper from './containers/DiscWrapper';
import Disc from './Disc';
import MetalTape from './MetalTape';
import Historian from './Historian';
import OpenBoxBed from './OpenBoxBed';


import gif from './pengin2.gif';
//const gif = require('http://razor-edge.net/token0.jpg');

interface TankProps {
  dispatch: Dispatch<any>;
}

interface TankState {
  contents: any
}

export default class Tank extends Component<TankProps, TankState> {
//export default class Tank extends Component<TankProps> {

  timer;
  terrain = React.createRef<HTMLDivElement>();
  ceiling = React.createRef<HTMLDivElement>();

  children = [];


  
  constructor(props: TankProps) {
    super(props);
    this.state = {
      contents: "<div>dummy</div>"
    };
  }



  componentDidMount() {
    let deg = '45deg';
//    deg = '30deg';
//    deg = '90deg'; // from the future
    this.terrain.current.style.transform += "translateX(100px)";
    this.terrain.current.style.transform += "rotateX(" + deg + ")";
    this.terrain.current.style.transform += "rotateZ(-15deg)";
/*
    this.ceiling.current.style.transform += "rotateX(" + deg + ")";
    this.ceiling.current.addEventListener("done", (e: CustomEvent) => {
      this.ceiling.current.innerHTML = e.detail.data_1;
    });
*/
    this.timer = setInterval((function() {
      this.tc += 1;
      this.doRoutine();
      if (1000000 <= this.tc) clearInterval(this.timer);
    }).bind(this), 40);
  }

  drawCeiling() {
/*    
    let reply = "<table border='1px' borderColor='green'>";
    let rows = 18;
    let columns = 50;
    for (let i = 0; i <= rows - 1; i++) {
      reply += '<tr>';
      for (let j = 0; j <= columns - 1; j++) {
        reply += '<td>' + "　" + '</td>';
        if (j == (columns - 1)) reply += '</tr>';
      }
    }
    reply += '</table>';
    return {
      __html: reply
    };
*/    
  }

  tc = 0;

  doRoutine() {

    let reply;
    reply = (
      <div>
        <Disc angleOfFront='90deg' innerHTMLForFrontFront="material(s)" innerHTMLForFrontInner="rss: 2<br />reduce able" />
        <Disc top="30px" angleOfFront='90deg' innerHTMLForFrontInner="rss: 3<br />!reduce able" />
        <Disc top="100px" angleOfFront='90deg' innerHTMLForFrontInner="rss: 2<br />reduce able" />
      </div>
    );

    if (this.tc <= 100) {
      reply = (
        <div>
        </div>
      );
//      this.state.contents = reply;

      if (this.tc == 100) console.log(this.state.contents);
    } else if (this.tc == 101) {
//      this.setState({contents: reply});
//      console.log(this.state.contents);
    } else {
//      console.log(reply);
    }

    return reply;

  }

  

  render() {
    return (
      <div className="Tank">
        <img src={gif} />

        <div ref={this.terrain} className="Terrain">
{/*        
          <Disc owner={this.ceiling} angleOfFront='90deg' innerHTMLForFrontFront="material(s)" />
*/}
          <OpenBoxBed top="0px" left="5px" height="500px" width="200px" contents={
            <div>
              <Disc angleOfFront='90deg' innerHTMLForFrontFront="material(s)" innerHTMLForFrontInner="rss: 2<br />reduce able" />
              <Disc top="30px" angleOfFront='90deg' innerHTMLForFrontInner="rss: 3<br />!reduce able" />
              <Disc top="100px" angleOfFront='90deg' innerHTMLForFrontInner="rss: 2<br />reduce able" />
              <Disc top="150px" angleOfFront='90deg' innerHTMLForFrontInner="<iframe src='http://razor-edge.net' width='150px' height='100px'></iframe>" />
              <Disc top="250px" angleOfFront='90deg' innerHTMLForFrontInner="<img src='' />" />
            </div>
          } innerHTMLForBed="prune<br />dropHint(s)<br />rectify" angleOfBed="0deg" />
          <OpenBoxBed top='0px' left='300px' innerHTMLForBed="結ぶ<br />coat with 醤油<br />炙る"></OpenBoxBed>
          <MetalTape top='100px' left='250px' innerHTMLForFrontFront=". sholdering peculiar ooMl" innerHTMLForBottomBack="妃"/>
          <Historian top='300px' left="250px" heightOfBottom="150px" innerHTMLForBackOuter="ooHand" />
        </div>
{/*        
        <Disc angleOfFront='0deg' top='0px' left='250px' innerHTMLForFrontFront="結ぶ<br />coat with 醤油<br />炙る" />
        <div ref={this.ceiling} className="Ceiling" >
          <span dangerouslySetInnerHTML={this.drawCeiling()}></span>
        </div>
*/}        
      </div>
    );
  }
}