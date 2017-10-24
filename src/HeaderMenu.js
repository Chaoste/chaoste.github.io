import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './HeaderMenu.css';

class HeaderMenu extends Component {
  sections = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'About', path: '/about' },
  ];

  renderSections() {
    return this.sections.map((section, i) => (
      <NavLink
        key={i}
        exact={section.path === '/'}
        className="section"
        activeClassName="active"
        to={section.path}
      >
        {section.title}
      </NavLink>
    ));
  }

  render() {
    return <div className="header-menu">{this.renderSections()}</div>;
  }
}

export default withRouter(HeaderMenu);
