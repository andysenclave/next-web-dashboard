import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import MonthlyCalendar from '../../components/Calendar/monthly';
import './agendas.css';

class Agendas extends Component {
  render() {
    return (
      <Grid container className="agendas-container">
        <Grid item className="daily-calendar-wrapper"></Grid>
        <Grid item className="monthly-calendar-wrapper">
          <MonthlyCalendar />
        </Grid>
      </Grid>
    );
  }
};

export default Agendas;