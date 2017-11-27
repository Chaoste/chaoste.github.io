import React, { Component } from 'react';

import { CONTEXT_WORK } from './Constants.js';

export const info = {
  title: 'MemeTracker',
  language: 'Javascript',
  description: 'Webapp for finding blog posts related to a phrase',
  year: 2016,
  youtubeId: 'aGDQ-pB85Fw',
  context: CONTEXT_WORK,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          This application is part of the Blog Intelligence project which crawls
          blogs and extracts useful knowledge from their blog posts. The
          provided data are used to show relations between posts from different
          blogs. By looking for a phrase or quote you can see which blog posted
          about this topic and on which day the post was published.
        </p>
      </div>
    );
  }
}

export default Content;
