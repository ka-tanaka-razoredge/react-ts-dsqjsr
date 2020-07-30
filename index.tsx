import React, { Component } from 'react';
import { render } from 'react-dom';
//import Tank from './Tank';
import DiscWrapper from './containers/DiscWrapper';
//import Disc from './Disc';
import './style.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);



interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <DiscWrapper />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
