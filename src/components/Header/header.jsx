import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';

import './header.css';
import MenuBar from '../MenuBar/menuBar';
import UserInfo from '../UserInfo/userInfo';

class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="default" className="header">
        <Toolbar className="bar">
          <MenuBar />
          <nav className="content-right">
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
          </nav>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
