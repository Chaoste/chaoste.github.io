import React, { Component } from 'react';

export const info = {
  title: 'AuthorSupport',
  language: 'Javascript',
  description:
    'Webapp for showing blog authors related blog posts while writing articles',
  year: 2016,
  youtubeId: 'uEYOIV4C5Fw',
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          This webapp is meant to be used by blog authors. While writing content
          a sidebar shows relevant posts and tags in realtime. Additionally the
          author is able to add a filter to the search based on his target
          group. Therefore he can define the age, gender and other aspects. The
          application is also a part of the Blog Intelligence project which
          crawls blogs and extracts useful knowledge from their blog posts.
        </p>
      </div>
    );
  }
}

export default Content;
