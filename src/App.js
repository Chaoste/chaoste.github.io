import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Home from './content/Home.js';
import About from './content/About.js';
import Projects from './content/Projects.js';
import ProjectsCategory from './content/ProjectsCategory.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:i" component={ProjectsCategory} />
          </AnimatedSwitch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
