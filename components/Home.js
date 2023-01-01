import React from 'react';
import { Helmet } from 'react-helmet';
import { BiCube } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Home = () => (
  <>
    <Helmet>
      <title>Quiz app -Home</title>
    </Helmet>
    <div id="home">
      <section>
        <div>
          <span className="mdi cube ">
            <BiCube />
          </span>
        </div>
        <h1>Quiz App</h1>
        <div className="play-button-container">
          <ul>
            <li>
              <Link className="play-button" to="/play/instructions">
                Play
              </Link>
            </li>
          </ul>
        </div>
        <div className="auth-container">
          <Link to="/login" className="auth-buttons" id="login-button">
            Login
          </Link>
          <Link to="/register" className="auth-buttons" id="signup-button">
            Register
          </Link>
        </div>
      </section>
    </div>
  </>
);
export default Home;
