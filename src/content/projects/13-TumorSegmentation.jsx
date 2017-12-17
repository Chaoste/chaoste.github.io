import React, { Component } from 'react';

import { CONTEXT_MASTER } from './Constants.js';

export const info = {
  title: 'Brain Tumor Segmentation',
  language: 'Python',
  description: '',
  year: 2017,
  youtubeId: 'K3Ziw-hd1g0',
  github: 'HPI-DeepLearning/SegMed',
  context: CONTEXT_MASTER,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          The Brain Tumor Segmentation Challenge (BraTS challenge) encourages
          researchers to develop algorithms to support doctors in segmenting
          brain tumors. BraTS provides a large dataset of brain scans from
          patients who suﬀered of gliomas. Within this seminar we worked with
          several Deep Learning techniques adressing this problem.
        </p>
        <p>
          Besides for simple tasks like classifying the presence and the type of
          a glioma we also worked on segmenting the tumor area. To solve this
          problem we used a Conditional Generative Adversarial Network (cGAN).
          Our last challenge was to predict a patient's survival rate. For this
          brain scans, the segmented tumor area and the patient's age were taken
          into account.
        </p>
      </div>
    );
  }
}

export default Content;
