import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PageTransition from 'react-router-page-transition';

import Home from './Home.js';
// import About from './About.js';
import Projects from './Projects.js';
import ProjectsCategory from './ProjectsCategory.js';

class ContentContainer extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <PageTransition>
        <Switch location={this.props.location}>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" component={About} /> */}
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:category" component={ProjectsCategory} />
          <Route path="*" component={Home} />
        </Switch>
      </PageTransition>
    );
  }
}

export default withRouter(ContentContainer);
