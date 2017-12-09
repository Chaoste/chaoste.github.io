import React, { Component } from 'react';

import { CONTEXT_HIGHSCHOOL } from './Constants.js';

export const info = {
  title: 'Minigolf',
  language: 'Delphi Pascal',
  description:
    'Simple customizable miniature golf for the middle school graduation',
  year: 2011,
  youtubeId: 'YdBqT4kWFLs',
  download: 'drive.google.com/file/d/0B6JQcxQ0IGR4c1drYWh5ajlsVjA',
  context: CONTEXT_HIGHSCHOOL,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          This game was my first project I did on my own to experience a new
          programming language. Therefore I had to consider physical effects,
          struggle with efficiency issues and make the project modular so it can
          handle new levels built by the user.
        </p>
        <p>
          The collision detection contains some nice tricks to make it very
          efficient and be not vulnerable to bugs like jumping out of the map
          because the ball is moving too fast. After setting up a modular level
          setup it was easy to add new features like the panels pushing the ball
          in a specific direction. <br />
          For building a new level the user can start a seperate application via
          the window menu which is able to translate user inputs into the used
          file format for levels.
        </p>
      </div>
    );
  }
}

export default Content;
