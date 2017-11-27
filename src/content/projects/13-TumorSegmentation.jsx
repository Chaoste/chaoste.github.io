import React, { Component } from 'react';

import { CONTEXT_MASTER } from './Constants.js';

export const info = {
  title: 'Brain Tumor Segmentation',
  language: 'Python',
  description: '',
  year: 2017,
  youtubeId: 'K3Ziw-hd1g0',
  context: CONTEXT_MASTER,
};

export class Content extends Component {
  render() {
    return (
      <div>
        <p>
          The Brain Tumor Segmentation Challenge (BraTS challenge) encourages
          researchers to develop algorithms to support doctors in segmenting
          brain tumors by providing a large dataset of brain scans of patients
          who suﬀered of gliomas. Within this seminar we worked on several Deep
          Learning techniques adressing this problem. Besides of simple tasks
          like classifying the presence of a glioma and its type we also worked
          on segmenting the tumor area and predicting the survival rate of
          patients. For the last challenge we took several input data at once
          into account: brain scans, the segmented tumor area and the patients
          age.
        </p>
      </div>
    );
  }
}

export default Content;
