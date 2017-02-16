import React, { Component } from 'react';

import VeryHeader from './components/jonHeder/VeryHeader';
import FullCodezIndex from './components/FullCodez/FullCodez_Index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <VeryHeader />
        </div>
        <FullCodezIndex />
      </div>
    );
  }
}

export default App;
