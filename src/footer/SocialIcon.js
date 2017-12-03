import React, { Component } from 'react';

import './SocialIcon.css';

class SocialIcon extends Component {
  render() {
    return (
      <a href={this.props.url} className="social-icon">
        <img alt={this.props.network} src={this.props.img} />
      </a>
    );
  }
}

export default SocialIcon;
