import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard/dashboard';
import Agendas from './containers/Agendas/agendas';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main id="app" className="container">
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/agendas' component={Agendas}/>
        </main>
      </BrowserRouter>
    );
  }
};

export default App;