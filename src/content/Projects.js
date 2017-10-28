import React, { Component } from 'react';

import './Projects.css';
import Preview from './Preview.js';

// Projects
import projectInfo1 from './projects/1-Minigolf.json';
import projectInfo2 from './projects/2-Editor of Drawing.json';
import projectInfo3 from './projects/3-JamFloor.json';
import projectInfo4 from './projects/4-SwaGolf.json';
import projectInfo5 from './projects/5-WikipediaToRDFs.json';
import projectInfo6 from './projects/6-NYCCabs.json';
import projectInfo7 from './projects/7-ConnectDrivers.json';
import projectInfo8 from './projects/8-Quickpark.json';
import projectInfo9 from './projects/9-MemeTracker.json';
import projectInfo10 from './projects/10-Authorsupport.json';

class Projects extends Component {
  projectInfos = [
    projectInfo1,
    projectInfo2,
    projectInfo3,
    projectInfo4,
    projectInfo5,
    projectInfo6,
    projectInfo7,
    projectInfo8,
    projectInfo9,
    projectInfo10,
  ];

  renderContent() {
    return this.projectInfos.map((info, i) => <Preview key={i} info={info} />);
  }

  render() {
    return (
      <div className="projects">
        <div className="container">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Projects;
