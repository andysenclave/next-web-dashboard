import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './userInfo.css';

const UserInfo = () => {
  return (
    <span className="user-info">
      <Typography variant="subheading" color="inherit" className="username">
        Alex Dunphy
      </Typography>
      <Avatar
        alt="Adelle Charles"
        src="https://material-ui.com/static/images/uxceo-128.jpg"
        className="avatar"
      />
    </span>
  );
};

export default UserInfo;