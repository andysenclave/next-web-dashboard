import React from 'react';
import Grid from '@material-ui/core/Grid';

import DateConfig from './config';
import DateOperations from './helper';
import './calendar.css';

const MonthlyCalendar = () => {
  const { short_dayNames } = DateConfig;
  const today = new Date();
  
  const emptyDays = Array(DateOperations.getStartDayOfMonth(today)).join().split(',');
  const days = Array(DateOperations.getDaysInMonth(today)).join().split(',');

  return (
    <Grid container className="month-calendar">
      <Grid container></Grid>
      <Grid className="row" container spacing={0}>
        {short_dayNames.map((item, index) => <Grid item key={index}>{item}</Grid>)}
      </Grid>
      <Grid className="row" container spacing={0}>
        {emptyDays.map((item, index) => <Grid item key={index}></Grid>)}      
        {days.map((item, index) => <Grid item key={index}>{index + 1}</Grid>)}
      </Grid>
    </Grid>
  );
}

export default MonthlyCalendar;