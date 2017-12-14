import React, { Component } from 'react';

import { CONTEXT_WEBPAGES } from './Constants.js';
import webpagePreview from './images/15-Lebenslinien-Webpage.jpg';

export const info = {
  title: 'Lebenslinien',
  language: 'Typo3',
  description: '',
  year: 2011,
  image: webpagePreview,
  link: 'http://www.lebenslinien-muenchen.de',
  context: CONTEXT_WEBPAGES,
};

export class Content extends Component {
  render() {
    return <div />;
  }
}

export default Content;
