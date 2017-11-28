import React, { Component } from 'react';

// import './Person.css';
import personImage from '../res/Bachelorpodium2016-Quickpark.png';

class Person extends Component {
  render() {
    return (
      <div className="person">
        <img src={personImage} alt="Bachelorpodium 2016" />
        <div className="intro">
          <p>
            As a student from the HPI in Potsdam I've learned to work in teams
            with many different techniques and programming languages. I have
            advanced knowledge in languages like Python, Javascript and Java.
          </p>
          <p>
            I participated in several projects working on scientific and
            economic topics - for example finding an algorithm to optimize the
            search for a parking spot in big cities.
          </p>
          <p>
            In my spare time I'm learning to apply machine learning algorithms,
            setting up webpages and dealing with other areas of studies (e.g.
            electrical engineering).
          </p>
          <p>I'm very interested in facing new topics and new ideas.</p>
        </div>
      </div>
    );
  }
}

export default Person;
