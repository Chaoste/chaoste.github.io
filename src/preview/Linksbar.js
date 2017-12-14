import React, { Component } from 'react';

import './Linksbar.css';
import githubIcon from '../res/github.svg';
import homeIcon from '../res/home.svg';

class Linksbar extends Component {
  renderButton(url, image) {
    return (
      <a className="link" href={url} target="_blank" rel="noopener">
        <img alt="Github" src={image} />
      </a>
    );
  }

  renderGithub(reponame) {
    if (!reponame) {
      return null;
    }
    return this.renderButton(`https://github.com/${reponame}`, githubIcon);
  }

  renderLink(url) {
    if (!url) {
      return null;
    }
    return this.renderButton(url, homeIcon);
  }

  render() {
    return (
      <div className="linksbar">
        {this.renderGithub(this.props.info.github)}
        {this.renderLink(this.props.info.link)}
      </div>
    );
  }
}

export default Linksbar;
