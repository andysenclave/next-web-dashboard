import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MenuIcon from '../MenuIcon/menuIcon';
import MenuItems from './menuItems';
import './menuBar.css';

class MenuBar extends Component {
  constructor(){
    super();
    this.state = {
      titleClass: 'title',
      menuIconClass: '',
      menuItemsClass: '',
      menuItems: [{
        title: `What's new?`,
        link: `/whatsnew`,
        icon: 'view_module'
      },{
        title: `Agenda`,
        link: `/agenda`,
        icon: 'date_range'
      },{
        title: `Nearby`,
        link: `/nearby`,
        icon: 'location_on'
      }]
    };
    this.transformMenu = this.transformMenu.bind(this);
  }

  transformMenu() {
    const { menuIconClass, menuItemsClass, titleClass } = this.state;
    this.setState({
      titleClass: titleClass === 'title' ? 'title fadeAwayTop' : 'title',
      menuIconClass: menuIconClass === 'open' ? '' : 'open',
      menuItemsClass: menuItemsClass === '' ? 'fadeInBottom' : ''
    });
  }

  render() {
    const { titleClass, menuIconClass, menuItemsClass, menuItems } = this.state;

    return (
      <Grid container spacing={24} className="menu-bar">
        <Grid item sm={1} md={1}>
          <Button variant="fab" color="primary" aria-label="add" className="drawer" onClick = {() => { this.transformMenu() }}>
            <MenuIcon className={`menu-icon ${menuIconClass}`} handleClick = {() => { this.transformMenu() }}/>
          </Button>
        </Grid>
        <Grid item sm={11} md={11}>
          <Typography variant="title" color="inherit" className={titleClass}>
            Digital Transformation
          </Typography>
        </Grid>
        <Grid item sm={1} md={1}></Grid>
        <Grid item sm={11} md={11}>
          <MenuItems items={menuItems} className={menuItemsClass}/>
        </Grid>
      </Grid>
    );
  }
}

export default MenuBar;