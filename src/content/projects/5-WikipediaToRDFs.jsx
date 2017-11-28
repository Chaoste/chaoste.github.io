import React, { Component } from 'react';

import { CONTEXT_BACHELOR } from './Constants.js';

export const info = {
  title: 'Wikipedia List to RDFs',
  language: 'Python',
  description:
    'Extending DBpedia by mining structured knowledge from Wikipedia’s tables',
  year: 2015,
  youtubeId: 'Np3lITsFpYw',
  github: 'AlexImmer/RDFs-from-wikitables',
  context: CONTEXT_BACHELOR,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          DBpedia extracts structured data from the Wikipedia articles so users
          are able to semantically query information of Wikipedia resources. The
          project is still growing and extendings its database with more
          semantic data. To support this process we worked on a service which
          analyses Wikipedia articles, collects all useful HTML tables and
          transforms them into RDFs so they can be used in a semantical way.
        </p>
        <p>
          The most intense task during this project was to extract the correct
          key of a table so we can find relations between columns of a table. To
          demonstrate our final results we set up a Wikipedia crawler which can
          be accessed via a minimalistic frontend application. This webapp
          allows the user to see which relations were found by the crawler.
        </p>
      </div>
    );
  }
}

export default Content;
