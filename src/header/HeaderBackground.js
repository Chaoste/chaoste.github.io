import React, { Component } from 'react';

import './HeaderBackground.css';

class HeaderBackground extends Component {
  render() {
    return <div className="background-container">{this.props.children}</div>;
  }
}

export default HeaderBackground;
