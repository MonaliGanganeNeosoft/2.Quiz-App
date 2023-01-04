import React from 'react';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';
const QuizInstructions = () => (
  <>
    <p>hii</p>
    <Helmet>
      <title>Quiz instructions-Quiz App</title>
    </Helmet>
    <div className="instructions container">
      <h1>How to play the game?</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <ul className="browser-default" id="main-list">
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit.</li>
        <img
          src="https://cdn.vanderbilt.edu/vu-wp0/wp-content/uploads/sites/59/2019/03/27130027/complex-300x180.png"
          alt="Quiz app options example"
        />
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
          fugit?
        </li>
        <img
          src="https://cdn.vanderbilt.edu/vu-wp0/wp-content/uploads/sites/59/2019/03/27130027/complex-300x180.png"
          alt="Quiz app answer example"
        />
        <li>
          Lorem ipsum dolor sit.
          <ul id="sublist">
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
      </ul>
      <div>
        <span className="left">
          <Link className="left" to="/">
            No take me back
          </Link>
          <Link className="right" to="/play/instructions">
            Okay lets to this
          </Link>
        </span>
      </div>
    </div>
  </>
);
export default QuizInstructions;
