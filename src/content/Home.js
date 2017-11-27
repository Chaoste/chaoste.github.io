import React, { Component } from 'react';

import './Home.css';
import Preview from './preview/Preview.js';

// Projects
import * as project8 from './projects/8-Quickpark.jsx';
import * as project13 from './projects/13-TumorSegmentation.jsx';
import * as project12 from './projects/12-HPITaler.jsx';
import * as project4 from './projects/4-SwaGolf.jsx';
import * as project9 from './projects/9-MemeTracker.jsx';
import * as project2 from './projects/2-Editor of Drawing.jsx';

class Home extends Component {
  projectInfos = [project8, project13, project12, project4, project9, project2];

  renderContent() {
    return this.projectInfos.map((project, i) => (
      <Preview key={i} info={project.info}>
        <project.Content />
      </Preview>
    ));
  }

  render() {
    return (
      <div className="home">
        <div className="container">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Home;
