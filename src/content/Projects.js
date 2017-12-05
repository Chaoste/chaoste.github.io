import React, { Component } from 'react';

import './Projects.css';
import Preview from './preview/Preview.js';
import Group from './Group.js';

import * as CONTEXT_GROUPS from './projects/Constants.js';
import ALL_PROJECTS from './projects';

class Projects extends Component {
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
