import React, { Component } from 'react';

import { CONTEXT_HACKATHON } from './Constants.js';

export const info = {
  title: 'Connect drivers',
  language: 'Python',
  description: 'HERE Mapathon - Planing routes for multiple cars',
  year: 2015,
  youtubeId: '3i0HaA5TU2M',
  context: CONTEXT_HACKATHON,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          For the hackathon (Mapathon) at HERE in Berlin we built a webapp
          sharing routes between the drivers of multiple cars. One driver can
          start a session which other drivers can join. Every session
          participant is allowed to change the route by adding and removing
          intermediate stops. Therefore we show all restaurants, petrol stations
          and other fitting locations along the route. The user can click on a
          location tag to add it to the route.
        </p>
      </div>
    );
  }
}

export default Content;
