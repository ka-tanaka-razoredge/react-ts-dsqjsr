import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { connect, Dispatch } from 'react-redux';
import DiscWrapper from './containers/DiscWrapper';

interface TankProps {
  dispatch: Dispatch<any>;
}

export default class Tank extends Component {
//export default class Tank extends Component<TankProps> {
/*  
  constructor(props: TankProps) {
    super(props);
    this.state = {
      innerHTMLForFrontFront: ""
    };
  }
*/

  componentDidMount() {
//    this.props.dispatch({type: "DO_IT"});
  }

  render() {
    return (
      <div className="Tank">
        <DiscWrapper></DiscWrapper>
        <DiscWrapper />
      </div>
    );
  }
}