import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Group.css';

class Group extends Component {
  renderMedia(project, i) {
    if (project.info.youtubeId) {
      return (
        <div key={i} className="img-wrapper yt-thumbnail-wrapper">
          <img
            src={`https://img.youtube.com/vi/${project.info.youtubeId}/0.jpg`}
            alt={project.info.title}
          />
        </div>
      );
    }
    if (project.info.image) {
      return (
        <div key={i} className="img-wrapper">
          <img src={project.info.image} alt={project.info.title} />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <NavLink
        className="group"
        to={`/projects/${this.props.title.toLowerCase()}`}
      >
        {this.props.projects.map(this.renderMedia)}
        <span className="title">{this.props.title}</span>
      </NavLink>
    );
  }
}

export default withRouter(Group);
