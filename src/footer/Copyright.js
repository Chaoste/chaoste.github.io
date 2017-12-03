import React, { Component } from 'react';

import './Copyright.css';

class Copyright extends Component {
  render() {
    const year = new Date().getFullYear();
    return <div className="copyright">&copy; {year} Thomas Kellermeier</div>;
  }
}

export default Copyright;
