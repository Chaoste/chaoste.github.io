import React, { Component } from 'react';

import { CONTEXT_WORK } from './Constants.js';
import webpagePreview from './images/19-BlogIntelligence-Webpage.jpg';

export const info = {
  title: 'Hasso-Plattner-Institut',
  language: ['HTML', 'CSS', 'Javascript'],
  description: 'Student Assistant',
  year: 2017,
  image: webpagePreview,
  link:
    'https://hpi.de/meinel/knowledge-tech/social-media/blog-intelligence.html',
  context: CONTEXT_WORK,
};

export class Content extends Component {
  render() {
    return (
      <div>
        At the chair "Internet technologies and systems" of Prof. Dr. Christoph
        Meinel I participated in the project "Blog Intelligence". In this
        context I acquired skills for technologies like e.g. SAP HANA,
        Webcrawler, and Machine Learning.
      </div>
    );
  }
}

export default Content;
