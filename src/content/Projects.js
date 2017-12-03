import React, { Component } from 'react';

import './Projects.css';
import Preview from './preview/Preview.js';
import Group from './Group.js';

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
import * as project11 from './projects/11-OptiHeat.jsx';
import * as project12 from './projects/12-HPITaler.jsx';
import * as project13 from './projects/13-TumorSegmentation.jsx';
import * as project14 from './projects/14-MASQuickpark.jsx';

import * as CONTEXT_GROUPS from './projects/Constants.js';

class Projects extends Component {
  projects = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10,
    project11,
    project12,
    project13,
    project14,
  ];

  getCategories() {
    const categories = Object.keys(CONTEXT_GROUPS).map(
      key => CONTEXT_GROUPS[key],
    );
    return categories.map(cat => {
      return {
        title: cat,
        projects: this.projects.filter(project => project.info.context === cat),
      };
    });
  }

  renderContent() {
    return this.projects.map((info, i) => <Preview key={i} info={info} />);
  }

  render() {
    return (
      <div className="projects">
        <div className="container">
          {this.getCategories().map((group, i) => <Group key={i} {...group} />)}
        </div>
      </div>
    );
  }
}

export default Projects;
