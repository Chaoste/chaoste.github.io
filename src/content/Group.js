import React, { Component } from 'react';

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
      <a
        className="group"
        onClick={() => {
          console.info(this.props.title, this.props.projects);
        }}
      >
        {this.props.projects.map(this.renderMedia)}
        <span className="title">{this.props.title}</span>
      </a>
    );
  }
}

export default Group;
