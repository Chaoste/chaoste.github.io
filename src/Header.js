import React, { Component } from 'react';

import HeaderMenu from './HeaderMenu.js';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <a className="title" href={window.location.origin}>
          Thomas Kellermeier
        </a>
        <HeaderMenu />
      </header>
    );
  }
}

export default Header;
