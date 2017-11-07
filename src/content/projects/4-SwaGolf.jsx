import React, { Component } from 'react';

export const info = {
  title: 'SwaGolf',
  language: 'Smalltalk',
  description: 'Beautiful customizable miniature golf.',
  year: 2015,
  youtubeId: 'abxcPewUGDA',
};

export class Content extends Component {
  render() {
    return (
      <div>
        For the lecture "Software architectures" we developed another miniature
        golf game as a team of four students. It contains a high functional
        level editor, scoring tables and efficient collision detections. The
        biggest advantage is the support for compositions of the level objects
        so it's easy to create new levels based on previous created groups of
        elements.
      </div>
    );
  }
}

export default Content;
