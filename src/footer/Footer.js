import React, { Component } from 'react';

import './Footer.css';

import Copyright from './Copyright.js';
import SocialIcon from './SocialIcon.js';

import linkedinIcon from '../res/logo-linkedin.png';
import githubIcon from '../res/logo-github.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="headline">
          <SocialIcon
            img={linkedinIcon}
            network="Linked In"
            url="https://www.linkedin.com/in/thomas-kellermeier/"
          />
          <SocialIcon
            img={githubIcon}
            network="Github"
            url="https://github.com/Chaoste/"
          />
        </div>
        <div className="subline">
          <Copyright />
        </div>
      </footer>
    );
  }
}

export default Footer;
