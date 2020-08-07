import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { connect, Dispatch } from 'react-redux';
import DiscWrapper from './containers/DiscWrapper';
import Disc from './Disc';
import MetalTape from './MetalTape';
import Historian from './Historian';
import OpenBoxBed from './OpenBoxBed';

interface TankProps {
  dispatch: Dispatch<any>;
}

export default class Tank extends Component {
//export default class Tank extends Component<TankProps> {
  terrain = React.createRef<HTMLDivElement>();
  ceiling = React.createRef<HTMLDivElement>();


/*  
  constructor(props: TankProps) {
    super(props);
    this.state = {
      innerHTMLForFrontFront: ""
    };
  }
*/

  componentDidMount() {
    let deg = '45deg';
    this.terrain.current.style.transform += "rotateX(" + deg + ")";
/*
    this.ceiling.current.style.transform += "rotateX(" + deg + ")";
    this.ceiling.current.addEventListener("done", (e: CustomEvent) => {
      this.ceiling.current.innerHTML = e.detail.data_1;
    });
*/
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

  render() {
    return (
      <div className="Tank">
        <div ref={this.terrain} className="Terrain">
{/*        
          <Disc owner={this.ceiling} angleOfFront='90deg' innerHTMLForFrontFront="material(s)" />
*/}
          <OpenBoxBed top="0px" left="5px" height="500px" contents={
            <div>
              <Disc angleOfFront='90deg' innerHTMLForFrontFront="material(s)" />
              <Disc top="200px" angleOfFront='90deg' innerHTMLForFrontInner="rss: 3" />
            </div>
          } />
          <Disc angleOfFront='15deg' top='0px' left='250px' innerHTMLForFrontFront="結ぶ<br />coat with 醤油<br />炙る" />
          <MetalTape top='100px' left='250px' innerHTMLForFrontFront=". sholdering peculiar ooMl" innerHTMLForBottomBack="妃"/>
          <MetalTape top='100px' left='250px' innerHTMLForFrontFront=". sholdering peculiar ooMl" innerHTMLForBottomBack="姫"/>
          <Historian top='300px' left="250px" heightOfBottom="150px" innerHTMLForBackOuter="ooHand" />
        </div>
{/*        
        <div ref={this.ceiling} className="Ceiling" >
          <span dangerouslySetInnerHTML={this.drawCeiling()}></span>
        </div>
*/}        
      </div>
    );
  }
}