import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <Grid container className="navigation-container">
        <Grid item className="left-wrapper"></Grid>
        <Grid item className="right-wrapper"></Grid>
      </Grid>
    );
  }
};

export default Navigation;