import React, { Component } from 'react';

import { CONTEXT_BACHELOR } from './Constants.js';

import solutionImage from './images/14-MASQuickpark-Solution.jpg';

export const info = {
  title: 'Quickpark in a MAS',
  language: 'Python',
  description:
    'Routing Drivers for On-Street Parking Search in a Multi-agent System',
  year: 2016,
  image: solutionImage,
  context: CONTEXT_BACHELOR,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          This Bachelor thesis presents a Multi-agent System based on the
          problem definition of the Quickpark paper. It proposed algorithms to
          generate parking search routes based on probabilistic information. In
          this project I tackled the theoretical problem of multiple drivers
          arriving at their destinations and starting their parking search.
          Their positions are close to each other so the probability of finding
          a parking spot in a street can be collected by different agents.
        </p>
        <p>
          This leads to a game theoretical problem in which agents play against
          eachother to collect a streets probability before the others. After
          defining the problem and a cost function I present several algorithms
          generating routes for each agent. They are optimized on the distance,
          search time and fairness among the agents.
        </p>
      </div>
    );
  }
}

export default Content;
