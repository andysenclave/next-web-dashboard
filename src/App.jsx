import React, { Component } from 'react';

import Header from './components/Header/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app" className="app">
        <Header />
      </div>
    );
  }
}

export default App;
