import React, { Component } from "react";
import { render } from "react-dom";
import Tank from "./Tank";
//import DiscWrapper from './containers/DiscWrapper';
import Disc from "./Disc";
import "./style.css";
import { connect, Dispatch } from "react-redux";

import { Provider } from "react-redux";
import { createStore } from "redux";
// import with doName what exported in reducers/index.ts?
import rootReducer from "./reducers";

const store = createStore(rootReducer);

const mapStateToProps = state => {
  return {
    innerHTMLForFrontFront: state.nameEx.innerHTMLForFrontFront
  };
};

// TODO
Disc = connect(mapStateToProps)(Disc);

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Tank />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
