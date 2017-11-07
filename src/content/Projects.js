import React, { Component } from 'react';

import './Projects.css';
import Preview from './Preview.js';

// Projects
import projectInfo1 from './projects/1-Minigolf.json';
import projectContent1 from './projects/1-Minigolf.jsx';
import projectInfo2 from './projects/2-Editor of Drawing.json';
import projectContent2 from './projects/2-Editor of Drawing.jsx';
import projectInfo3 from './projects/3-JamFloor.json';
import projectContent3 from './projects/3-JamFloor.jsx';
import projectInfo4 from './projects/4-SwaGolf.json';
import projectContent4 from './projects/4-SwaGolf.jsx';
import projectInfo5 from './projects/5-WikipediaToRDFs.json';
import projectContent5 from './projects/5-WikipediaToRDFs.jsx';
import projectInfo6 from './projects/6-NYCCabs.json';
import projectContent6 from './projects/6-NYCCabs.jsx';
import projectInfo7 from './projects/7-ConnectDrivers.json';
import projectContent7 from './projects/7-ConnectDrivers.jsx';
import projectInfo8 from './projects/8-Quickpark.json';
import projectContent8 from './projects/8-Quickpark.jsx';
import projectInfo9 from './projects/9-MemeTracker.json';
import projectContent9 from './projects/9-MemeTracker.jsx';
import projectInfo10 from './projects/10-Authorsupport.json';
import projectContent10 from './projects/10-Authorsupport.jsx';

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
