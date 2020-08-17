import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { 
  AppBar, 
  Toolbar, 
  IconButton,
  Menu,
  MenuItem
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchHandler from './Search/SearchHandler';
import useStyles from './../styles';

import categories from '../categories';

export default function Header() {

  const classes = useStyles();

  const [mobileMenuAnchorEl, setAnchorEl] = useState(null);

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event) => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        className={classes.appbar}
      >
        <Toolbar className={classes.toolbar}>
          <Link to='/'>
            <img 
              src='/media/logo.png' alt='logo'
              className={classes.headerLogo}
            />
          </Link>
         
          <SearchHandler />

          <div className={classes.menuDesktop}>
            {categories.map(category => (
              <NavLink 
                to={'/photos/' + category.query} key={category.title}
                className={classes.menuLink}
              >
                { category.title }
              </NavLink>
            ))}
          </div>
          <div className={classes.menuMobile}>
            <IconButton
              aria-label="show more"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={(event) => handleClickMenu(event)}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={mobileMenuAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id='mobile-menu'
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(mobileMenuAnchorEl)}
        onClose={handleClose}
      >
        {categories.map(category => (
          <MenuItem key={category.title} onClick={(event) => handleMenuItemClick(event)}>
            <NavLink to={'/photos/' + category.query}>{ category.title }</NavLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
