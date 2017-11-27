import React, { Component } from 'react';

import { CONTEXT_BACHELOR } from './Constants.js';

export const info = {
  title: 'JamFloor',
  language: 'C++',
  description: 'Collaborative Music Floor',
  year: 2015,
  youtubeId: 'm1ROw1lBEZc',
  context: CONTEXT_BACHELOR,
};

export class Content extends Component {
  render() {
    return (
      <div>
        As part of the lecture "Human Computer Interactions" (HCI) our task was
        to develop an application which supports people without instruments who
        want to join a jam session. As part of our research we met different
        musicians and visited a real jam session. For the implementation we used
        a platform which tracks the feet of the users.
      </div>
    );
  }
}

export default Content;
