import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { connect, Dispatch } from 'react-redux';
import DiscWrapper from './containers/DiscWrapper';
import Disc from './Disc';

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
    this.ceiling.current.style.transform += "rotateX(" + deg + ")";
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
          <Disc angleOfFront='90deg' innerHTMLForFrontFront="material(s)" />
          <Disc angleOfFront='15deg' top='0px' left='250px' innerHTMLForFrontFront="結ぶ<br />coat with 醤油<br />炙る" />
        </div>
        <div ref={this.ceiling} className="Ceiling" >
          <span dangerouslySetInnerHTML={this.drawCeiling()}></span>
        </div>
      </div>
    );
  }
}