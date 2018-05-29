import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MenuIcon from '../MenuIcon/menuIcon';
import './menuBar.css';

class MenuBar extends Component {
  constructor(){
    super();
    this.state = {
      menuIconClass: ''
    };
    this.transformMenu = this.transformMenu.bind(this);
  }

  transformMenu() {
    const { menuIconClass } = this.state;
    this.setState({
      menuIconClass: menuIconClass === 'open' ? '' : 'open'
    });
  }

  render() {
    const { menuIconClass } = this.state;

    return (
      <section className="menu-bar">
          <Button variant="fab" color="primary" aria-label="add" className="drawer" onClick = {() => { this.transformMenu() }}>
            <MenuIcon className={`menu-icon ${menuIconClass}`} handleClick = {() => { this.transformMenu() }}/>
          </Button>
          <Typography variant="title" color="inherit" className="title">
            Digital Transformation
          </Typography>
      </section>
    );
  }
}

export default MenuBar;