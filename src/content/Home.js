import React, { Component } from 'react';

import './Home.css';
import Preview from './Preview.js';

// Projects
import * as project1 from './projects/1-Minigolf.jsx';
import * as project2 from './projects/2-Editor of Drawing.jsx';
import * as project3 from './projects/3-JamFloor.jsx';
import * as project4 from './projects/4-SwaGolf.jsx';
import * as project5 from './projects/5-WikipediaToRDFs.jsx';
import * as project6 from './projects/6-NYCCabs.jsx';
import * as project7 from './projects/7-ConnectDrivers.jsx';
import * as project8 from './projects/8-Quickpark.jsx';
import * as project9 from './projects/9-MemeTracker.jsx';
import * as project10 from './projects/10-Authorsupport.jsx';

class Home extends Component {
  projectInfos = [
    project8,
    project3,
    project2,
    project5,
    project4,
    project1,
    project6,
    project7,
    project9,
    project10,
  ];

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
