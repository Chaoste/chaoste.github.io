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
          Swirlds Hashgraph Consensus Algorithm. Therefore we built a wallet in
          Kivy including the Consensus Algorithm itself and showing and
          executing transactions in the network.
        </p>
        <p>
          The related seminar report introduces the foundations of
          cryptocurrencies and alternatives to proof-of-work mechanisms,
          outlines our approach and evaluates our implementation. Additionally,
          it covers some possible improvements to motivate for future work.
        </p>
      </div>
    );
  }
}

export default Content;
