import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard/dashboard';
import Navigation from './containers/Navigation/navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main id="app" className="container">
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/navigate' component={Navigation}/>
        </main>
      </BrowserRouter>
    );
  }
};

export default App;