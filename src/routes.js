import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <Route exact path='/' component={Dashboard}/>
        </main>
      </BrowserRouter>
    );
  }
};

export default App;