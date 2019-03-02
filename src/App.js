import React, { Component } from 'react';
import './App.scss';

import Navigation from './Components/Navigation'
import Content from './Components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Content/>
      </div>
    );
  }
}

export default App;
