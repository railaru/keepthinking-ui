import React, { Component } from 'react';
import './App.scss';

import Navigation from './Components/Navigation'
import MobileMenu from './Components/MobileMenu'
import Content from './Components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <MobileMenu/>
        <Content/>
      </div>
    );
  }
}

export default App;
