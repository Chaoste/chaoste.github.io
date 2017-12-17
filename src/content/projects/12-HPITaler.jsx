import React, { Component } from 'react';

import { CONTEXT_MASTER } from './Constants.js';

export const info = {
  title: 'HPI Taler',
  language: ['Python', 'Kivy'],
  description:
    'A new cryptocurrency based on Swirlds Hashgraph Consensus Algorithm',
  year: 2017,
  youtubeId: 'Lu0FDO86XOw',
  github: 'ceddie/bptc_wallet',
  context: CONTEXT_MASTER,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          In the lecture "Blockchain & BPM" we developed a prototypical,
          blockchain-free and proof-of-work-free cryptocurrency that uses the
          Swirlds Hashgraph Consensus Algorithm. For this we built a wallet in
          Kivy which includes the consensus algorithm itself and shows and
          executes transactions within the network.
        </p>
        <p>
          The related seminar report introduces the foundations of
          cryptocurrencies and alternatives to proof-of-work mechanisms,
          outlines our approach and evaluates our implementation. Additionally,
          it covers some improvement possibilities to motivate future work on
          this topic.
        </p>
      </div>
    );
  }
}

export default Content;
