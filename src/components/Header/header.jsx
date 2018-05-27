import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';

import './header.css';
import UserInfo from '../UserInfo/userInfo';

class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="default" className="header">
        <Toolbar className="bar">
          <Button variant="fab" color="primary" aria-label="add" className="drawer">
            <MenuIcon />
          </Button>
          <Typography variant="title" color="inherit" className="title">
            Digital Transformation
          </Typography>
          <span className="content-right">
            <span className="links">
              <Icon className="notification" color="disabled">
                notification_important
              </Icon>
            </span>
            <span className="links">
              <Icon className="agenda" color="disabled">
                date_range
              </Icon>
            </span>
            <UserInfo />
          </span>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
