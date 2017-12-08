import React, { Component } from 'react';

import { CONTEXT_WEBPAGES } from './Constants.js';
import webpagePreview from './images/18-FrankSueltemeyer-Webpage.jpg';

export const info = {
  title: 'Frank Sueltemeyer',
  language: ['HTML', 'CSS', 'Javascript'],
  description: '',
  year: 2011,
  image: webpagePreview,
  link: 'www.frank-sueltemeyer.com',
  context: CONTEXT_WEBPAGES,
};

export class Content extends Component {
  render() {
    return <div />;
  }
}

export default Content;
