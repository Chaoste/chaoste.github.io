import React, { Component } from 'react';

import { CONTEXT_WORK } from './Constants.js';
import webappPreview from './images/21-Nexenio-Webapp-Logo.jpg';

export const info = {
  title: 'NeXenio',
  language: ['HTML', 'CSS', 'Javascript'],
  description: 'Developing a collaborative online Whiteboard',
  year: 2017,
  image: webappPreview,
  link: 'www.nexenio.com',
  context: CONTEXT_WORK,
};

export class Content extends Component {
  render() {
    return (
      <div>
        As Junior Developer in the NeXboard team at NeXenio I\'m participating
        in the development of a collaborative online Whiteboard. We're working
        with the latest webapp technologies (e.g. React, Redux) and especially
        focus on the support of all browsers.
      </div>
    );
  }
}

export default Content;
