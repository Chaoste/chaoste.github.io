import React, { Component } from 'react';

import './Linksbar.css';
import githubIcon from '../../res/github.svg';

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

  render() {
    return (
      <div className="linksbar">
        {this.renderGithub(this.props.info.github)}
      </div>
    );
  }
}

export default Linksbar;
