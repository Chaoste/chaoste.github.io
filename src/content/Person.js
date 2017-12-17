import React, { Component } from 'react';

import './Person.css';
import personImage from '../res/Bachelorpodium2016-Quickpark 2.jpg';

class Person extends Component {
  render() {
    return (
      <div className="person">
        <div className="image-container">
          <img src={personImage} alt="Bachelorpodium 2016" />
        </div>
        <div className="intro">
          <h2 className="title">Hi, I'm Thomas!</h2>
          <p>
            As a student from the Hasso Plattner Institute (HPI) in Potsdam I
            have learned to work in teams using many different techniques and
            programming languages. I have advanced knowledge in languages like
            Python, Javascript and Java.
          </p>
          <p>
            I participated in several projects working on scientific and
            economic topics – for example finding an algorithm to optimize the
            search for a parking spot in big cities.
          </p>
          <p>
            In my spare time I am learning to apply machine learning algorithms,
            setting up webpages and dealing with other areas of studies, such as
            electrical engineering. I am very interested in facing new topics
            and ideas!
          </p>
        </div>
      </div>
    );
  }
}

export default Person;
