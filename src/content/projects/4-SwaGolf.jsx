import React, { Component } from 'react';

import { CONTEXT_BACHELOR } from './Constants.js';

export const info = {
  title: 'SwaGolf',
  language: 'Smalltalk',
  description: 'Beautiful customizable miniature golf.',
  year: 2015,
  youtubeId: 'abxcPewUGDA',
  context: CONTEXT_BACHELOR,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          For the lecture "Software architectures" we developed another
          miniature golf game as a team of four students. It contains a high
          functional level editor, scoring tables and efficient collision
          detections. The biggest advantage is the support for compositions of
          the level objects so it's easy to create new levels based on previous
          created groups of elements.
        </p>
      </div>
    );
  }
}

export default Content;
