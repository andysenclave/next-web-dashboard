import React from 'react';
import PropTypes from 'prop-types';

import './menuIcon.css';

const MenuIcon = ({ className, handleClick }) => {
  const hamburgerClass = `reactive-hamburger ${className}`;
  return(
      <div className={hamburgerClass} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
  );
}

MenuIcon.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default  MenuIcon;