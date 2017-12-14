import React, { Component } from 'react';

import { CONTEXT_WEBPAGES } from './Constants.js';
import webpagePreview from './images/17-LavioletteRecords-Webpage.jpg';

export const info = {
  title: 'Laviolette Records',
  language: 'Wordpress',
  description: '',
  year: 2016,
  image: webpagePreview,
  link: 'http://www.lavioletterecords.com',
  context: CONTEXT_WEBPAGES,
};

export class Content extends Component {
  render() {
    return <div />;
  }
}

export default Content;
