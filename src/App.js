import React, { Component } from 'react';

import VeryHeader from './such_component/jonHeder/VeryHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <VeryHeader />
        </div>
        <div className="children-container">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
