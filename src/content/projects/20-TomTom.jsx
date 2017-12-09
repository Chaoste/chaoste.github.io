import React, { Component } from 'react';

import { CONTEXT_WORK } from './Constants.js';
import logo from './images/20-TomTom-Logo.jpg';

export const info = {
  title: 'TomTom',
  language: ['Python'],
  description: 'Student Trainee',
  year: 2017,
  image: logo,
  link: 'www.tomtom.com',
  context: CONTEXT_WORK,
};

export class Content extends Component {
  render() {
    return (
      <div>
        As a part of the team Travel Information Development​ I participated in
        the development of future products. My focus was on the evaluation and
        improvement of already existing algorithms. These included time based
        clustering algorithms and image recognition which are not completely
        researched areas and therefore are of scientific nature.
      </div>
    );
  }
}

export default Content;
