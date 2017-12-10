import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './header/Header.js';
import ContentContainer from './content/ContentContainer.js';
import Footer from './footer/Footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <ContentContainer />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
