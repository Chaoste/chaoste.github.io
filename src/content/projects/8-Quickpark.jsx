import React, { Component } from 'react';

import { CONTEXT_BACHELOR } from './Constants.js';

export const info = {
  title: 'Quickpark',
  language: 'Python',
  description: 'Probabilistic Routing for On-Street Parking Search',
  year: 2016,
  youtubeId: 'Wn-HTkPACvU',
  github: 'quickpark/quickpark',
  context: CONTEXT_BACHELOR,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          An estimated 30 % of urban traffic is caused by search for parking
          spots. Suggesting routes along highly probable parking spots could
          reduce traffic. In this paper, we formalize parking search as a
          probabilistic problem on a road graph and show that it is NP-complete.
          We explore heuristics that optimize for the driving duration and the
          walking distance to the destination.
        </p>
        <p>
          Routes are constrained to reach a certain probability threshold of
          finding a spot. Empirically estimated probabilities of successful
          parking attempts are provided by TomTom on a per-street basis. We
          release these probabilities as a dataset of about 80,000 roads
          covering the Berlin area. This allows to evaluate parking search
          algorithms on a real road network with realistic probabilities for the
          first time. However, for many other areas, parking probabilities are
          not openly available. Because they are effortful to collect, we
          propose an algorithm that relies on conventional road attributes only.
          Our experiments show that this algorithm comes close to the baseline
          by a factor of 1.3 in our cost measure. This leads to the conclusion
          that conventional road attributes may be sufficient to compute
          reasonably good parking search routes.
        </p>
        <p className="note">
          [from our conference paper "Probabilistic Routing for On-Street
          Parking Search" by Arndt et al.]
        </p>
      </div>
    );
  }
}

export default Content;
