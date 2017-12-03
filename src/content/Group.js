import React, { Component } from 'react';

class Group extends Component {
  render() {
    return (
      <a
        className="group"
        onClick={() => {
          console.info(this.props.title, this.props.projects);
        }}
      >
        {this.props.title}
      </a>
    );
  }
}

export default Group;
