import React, { Component } from 'react';

import { CONTEXT_HACKATHON } from './Constants.js';

import webappPreview from './images/11-OptiHeat-Webapp.jpg';

export const info = {
  title: 'OptiHeat',
  language: ['Python', 'Javascript'],
  description: 'Saving energy and making office worker feel comfortable',
  year: 2017,
  image: webappPreview,
  context: CONTEXT_HACKATHON,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          At the BOSCH hackathon 2017 in Berlin we used Reinforcement Learning
          to tackle the problem of office workers to feel comfortable regarding
          the temperature and air quality in a large office.
        </p>
        <p>
          Large offices include the living together of many workers. To let them
          feel comfortable at work, heating systems and humidifiers are
          available. These systems are often automatically programmed so they
          provide known acceptable conditions. But workers have their own
          specific preferences on temperature and humidity and therefore they
          might want to change it manually. Because this accompanies with
          disagreements among the workers, the room temperature and humidity are
          often changed and result in arising energy costs. We proposed a
          system, which considers the energy costs and the feedback by the
          workers. After some time we learn the users preferences, so they don't
          have to give feedback again and again.
        </p>
      </div>
    );
  }
}

export default Content;
