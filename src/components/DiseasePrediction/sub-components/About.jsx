import React from "react";

import "./About.styles.scss"

const About = () => {

  return (
    <div className="about">
      <div className="diseaseDetector">
        <h1>
            DISEASE DETECTOR
        </h1>
        <h3>
            Disease Detector tells you about the
            disease you may suffer, according to the symptoms you choose.
            The more symptoms you provide, the more accurate the results
            will be. After the result is being predicted a button can be
            seen which will tell various things like prevention, treatment,
            facts etc. about the predicted disease!
        </h3>
      </div>
      <div className="covidTracker">
            <h1>
            COVID TRACKER
        </h1>
        <h3>
           Covid Tracker app tracks worldwide covid cases and can even separate them country-wise. This also shows the number of people recovered and number of deaths in certain regions. Also, it shows a line graph to better visualize the data and a sorted list of countries by covid cases.
        </h3>
      </div>
      <div className="madeBy">
        <h1>Made By:</h1>
        <div className="studentName">
          <h2>Jatin Kumar</h2>
          <h3>11801028</h3>
        </div>
   <div className="studentName">
          <h2>Salmaan Khan</h2>
          <h3>11801036</h3>
        </div>
 <div className="studentName">
          <h2>Shally Jindal</h2>
          <h3>11801038</h3>
        </div>
        <div className="studentName">
          <h2>Harshit Vashisht</h2>
          <h3>11801153</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
