import React, { Component } from 'react';

import MonthlyCalendar from '../../components/Calendar/monthly';
import './agendas.css';

class Agendas extends Component {
  render() {
    return (
      <main className="agendas-container">
        <aside className="daily-calendar-wrapper"></aside>
        <section className="monthly-calendar-wrapper">
          <MonthlyCalendar />
        </section>
      </main>
    );
  }
};

export default Agendas;