import React from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

const menuItems = ({ className, items = [{ title: 'Demo', link: '/demo' }] }) => {
  return (
    <nav className={`menu ${className}`}>
      <br/>
      { 
        items.map((item, index) => {
          const itemClass = `${item.link.replace('/', '')}`;
          const wrapperClass = `nav-item ${itemClass}-wrapper`;
          const titleClass = `nav-title ${itemClass}-title`;
          
          return (
            <span key={index} className={wrapperClass}>
              <Icon className={itemClass} color="disabled">
                {item.icon}
              </Icon>
              <Typography variant="subheading" color="default" className={titleClass}>
                {item.title}
              </Typography>
            </span>
          )
        })
      }
    </nav>
  )
}

export default menuItems;
