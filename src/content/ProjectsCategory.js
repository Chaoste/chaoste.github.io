import React, { Component } from 'react';

import './ProjectsCategory.css';
import Preview from './preview/Preview.js';

import ALL_PROJECTS from './projects/';

class ProjectsCategory extends Component {
  renderContent() {
    return 'UNDER CONSTRUCTION !!';
    // TODO:
    return this.props.projects.map((project, i) => (
      <Preview key={i} info={project.info}>
        <project.Content />
      </Preview>
    ));
  }

  render() {
    console.log(this.props);
    return (
      <div className="projects-category">
        <div className="content-container">{this.renderContent()}</div>
      </div>
    );
  }
}

export default ProjectsCategory;
