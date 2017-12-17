import React, { Component } from 'react';

import { CONTEXT_BACHELOR } from './Constants.js';

export const info = {
  title: 'SwaGolf',
  language: 'Smalltalk',
  description: 'Beautiful customizable miniature golf',
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
          miniature golf game in a team of four students. It contains a highly
          functional level editor, scoring tables and efficient collision
          detections. The biggest advantage is the possibility to create and
          reuse previously grouped elements.
        </p>
      </div>
    );
  }
}

export default Content;
