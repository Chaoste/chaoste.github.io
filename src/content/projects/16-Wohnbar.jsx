import React, { Component } from 'react';

import { CONTEXT_WEBPAGES } from './Constants.js';
import webpagePreview from './images/16-Wohnbar-Webpage.jpg';

export const info = {
  title: 'Wohnbar AG',
  language: 'Wordpress',
  description: '',
  year: 2017,
  image: webpagePreview,
  link: 'http://www.wohnbar.ag',
  context: CONTEXT_WEBPAGES,
};

export class Content extends Component {
  render() {
    return <div />;
  }
}

export default Content;
