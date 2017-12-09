import React, { Component } from 'react';

import { CONTEXT_HIGHSCHOOL } from './Constants.js';

export const info = {
  title: 'Editor of Drawing',
  language: 'Java',
  description: 'Highly functional editor for drawings',
  year: 2013,
  youtubeId: 'ht1iFqjT4S0',
  download: 'drive.google.com/open?id=0B6JQcxQ0IGR4NzduM2JNMlNIYzA',
  context: CONTEXT_HIGHSCHOOL,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          This editor written in JAVA includes several drawing tools, selection
          modes, filters and works with vector graphics so that the user is able
          to edit his drawings later. As shown in the demo it also offers a
          Newton fractal generator.
        </p>
        <p>
          For my Abitur (graduation from german high school) I wrote a 20-sided
          paper describing the software structure, interesting insights and the
          historical background of drawing programs.
        </p>
      </div>
    );
  }
}

export default Content;
