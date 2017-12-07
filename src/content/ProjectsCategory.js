import React, { Component } from 'react';

import './ProjectsCategory.css';
import Preview from './preview/Preview.js';

import ALL_PROJECTS from './projects/';

class ProjectsCategory extends Component {
  renderContent() {
    const context = this.props.match.params.category;
    return ALL_PROJECTS.filter(
      project => project.info.context.toLowerCase() === context,
    ).map((project, i) => (
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
