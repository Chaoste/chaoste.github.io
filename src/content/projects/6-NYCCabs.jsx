import React, { Component } from 'react';

import { CONTEXT_BACHELOR } from './Constants.js';

export const info = {
  title: 'Visualizing cab data from NYC',
  language: 'Javascript',
  description: 'Collect and visualize 700 mio. data entries in SAP HANA',
  year: 2015,
  youtubeId: 'vEwwDdPnHrk',
  context: CONTEXT_BACHELOR,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          As an example for handling with big data in SAP HANA we received 700
          million traces from cabs in NYC (open source). The project included
          data cleansing and preparation before implementing optimized queries.
          The application visualizes aggregated data from a backend which sends
          queries to the HANA database.
        </p>
      </div>
    );
  }
}

export default Content;
