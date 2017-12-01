import React, { Component } from 'react';

import HeaderMenu from './HeaderMenu.js';
import HeaderBackground from './HeaderBackground.js';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <HeaderBackground>
          <a className="title" href={window.location.origin}>
            Thomas Kellermeier
          </a>
          <HeaderMenu />
        </HeaderBackground>
      </header>
    );
  }
}

export default Header;
